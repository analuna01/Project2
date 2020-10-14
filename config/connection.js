var Sequelize = require("sequelize");
require("dotenv").config();

process.envrequire("dotenv").config();

var SQLPORT = require(process.env.SQLPORT);
require("dotenv").config();

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("memory_db", "root", "root", {
  host: "localhost",
  port: "3318",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

// Exports the connection for other files to use
module.exports = sequelize;
