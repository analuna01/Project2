var Sequelize = require("sequelize");
require("dotenv").config();

process.envrequire("dotenv").config();

var SQLPORT = require(process.env.SQLPORT);
require("dotenv").config();

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: "3318",
    user: "root",
    password: "root",
    database: "memory_db",
  })
  // var sequelize = new Sequelize("memory_db", "root", "root", {
  //   host: "localhost",
  //   port: "3306",
  //   dialect: "mysql",
  //   pool: {
  //     max: 5,
  //     min: 0,
  //     idle: 10000,

  connection.connect();

};

// Exports the connection for other files to use
module.exports = connection;
// module.exports = sequelize;
