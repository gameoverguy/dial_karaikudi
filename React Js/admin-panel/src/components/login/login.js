import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formfield01, setformfield01] = useState("");
  const [formfield02, setformfield02] = useState("");

  const [users, setUsers] = useState(null);

  function clearForm() {
    setformfield01("");
    setformfield02("");
    getRandom();
    getInt();
  }

  let x = 0;
  let y = 0;

  function getRandom() {
    x = Math.random() * 10;
    console.log(x);
  }

  function getInt() {
    y = Math.floor(x);
    console.log(y);
  }

  function handleLogin() {
    const loggedinUser = users.find(
      (user) => user.name === formfield01 && user.pass === formfield02
    );

    console.log(loggedinUser);

    loggedinUser != null
      ? navigate(`/userdashboard/${loggedinUser.id}`)
      : console.log("username or password is incorrect");

    clearForm();
  }

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <>
      <div className="box">
        <div>
          <div>Username</div>
          <input
            placeholder="name"
            name="username"
            onChange={(event) => setformfield01(event.target.value)}
            value={formfield01}
          />
        </div>
        <div>
          <div>Password</div>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(event) => setformfield02(event.target.value)}
            value={formfield02}
          ></input>
        </div>

        <div className="btn btn-primary" onClick={handleLogin}>
          Login
        </div>
        <div className="btn btn-secondary" onClick={clearForm}>
          cancel
        </div>
      </div>
    </>
  );
}
