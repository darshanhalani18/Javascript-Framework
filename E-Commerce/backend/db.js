const mysql = require("mysql2");

// MySQL Connection (via XAMPP)
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "e-commerce",
  port: 3307,
});

db.connect((err) => {
  if (err) {
    console.error("Connection failed!!", err.message);
    return;
  }
  console.log("Successfully Connected to MySQL");
});

module.exports = db; // default export
// module.exports = {db}; // named export
