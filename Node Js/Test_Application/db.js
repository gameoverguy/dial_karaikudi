const sequelize = require("sequelize");
const db = new sequelize("companydb", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

const connection = () => {
  db.authenticate()
    .then(() => {
      console.log("connection has been successfully Established");
    })
    .catch((err) => {
      console.error("unable to connect to the db", err.message);
    });
};

connection();

module.exports = db;
