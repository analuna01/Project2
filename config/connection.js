var Sequelize = require("sequelize");
<<<<<<< HEAD
var SQLPORT = require(process.env.SQLPORT);
=======
require('dotenv').config();
>>>>>>> 70c2910c6ec8b708dbaf69addfe1f28c57c9154c

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("memory_db", "root", "root", {
  host: "localhost",
<<<<<<< HEAD
  port: SQLPORT,
=======
<<<<<<< HEAD
  port: 3,
=======
  port: process.env.SQLPORT,
>>>>>>> a674a976d9f4327111282a3d7a7c0a7a0bbeaee2
>>>>>>> 70c2910c6ec8b708dbaf69addfe1f28c57c9154c
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

// Exports the connection for other files to use
module.exports = sequelize;
