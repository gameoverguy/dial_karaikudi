// Setup
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");

const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

const environ = require("dotenv");
environ.config();

const jwt = require("jsonwebtoken");

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Setup

// Signup Route**
app.post("/api/signup", async (req, res) => {
  const { first_name, last_name, email, username, password } = req.body;

  // Check if email or username already exists
  const checkUserQuery = "SELECT * FROM users WHERE username = ?";
  db.query(checkUserQuery, [username], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (result.length > 0) {
      return res.json({ message: "username already exists" });
    }

    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({ message: "Error hashing password" });
      }

      const sql =
        "INSERT INTO users (first_name, last_name, email, username, password) VALUES (?, ?, ?, ?, ?)";
      db.query(sql, [first_name, last_name, email, username, hash], (err) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Database error", error: err });
        }
        res.status(201).json({ message: "User registered successfully" });
      });
    });
  });
});

// **Login Route**
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  const sql = "SELECT * FROM users WHERE username = ?";

  db.query(sql, [username], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: "Server error" });
    }
    if (results.length === 0)
      return res.status(401).json({ message: "Invalid email or password" });

    const user = results[0];
    console.log("User found:", user); // Debugging

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
      }

      if (!isMatch)
        return res.status(401).json({ message: "Invalid email or password" });

      const jwtSecret = process.env.JWT_SECRET || "defaultSecretKey";

      const token = jwt.sign({ id: user.id }, jwtSecret, {
        expiresIn: "1h",
      });
      res.json({ message: "Login successful", token });
    });
  });
});

app.post("/employees", (req, res) => {
  const { name, email } = req.body;
  const sql = "INSERT INTO employees (name, email) VALUES (?, ?)";

  db.query(sql, [name, email], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res
      .status(201)
      .json({ message: "User added successfully", id: result.insertId });
  });
});
