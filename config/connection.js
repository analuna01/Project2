var Sequelize = require("sequelize");
require('dotenv').config();

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("memory_db", "root", "root", {
  host: "localhost",
<<<<<<< HEAD
  port: 3,
=======
  port: process.env.SQLPORT,
>>>>>>> a674a976d9f4327111282a3d7a7c0a7a0bbeaee2
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

// Exports the connection for other files to use
module.exports = sequelize;
