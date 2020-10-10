// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/gameboard", function (req, res) {
    var cardImages = [
      "https://www.flaticon.com/svg/static/icons/svg/2281/2281113.svg",
      "https://www.flaticon.com/svg/static/icons/svg/2281/2281113.svg",
      "https://www.flaticon.com/svg/static/icons/svg/2281/2281113.svg",
      "https://www.flaticon.com/svg/static/icons/svg/2281/2281113.svg",
      "https://www.flaticon.com/svg/static/icons/svg/2281/2281113.svg",
      "https://www.flaticon.com/svg/static/icons/svg/2281/2281113.svg",
      "https://www.flaticon.com/svg/static/icons/svg/2281/2281113.svg",
      "https://www.flaticon.com/svg/static/icons/svg/2281/2281113.svg",
      "https://www.flaticon.com/svg/static/icons/svg/2281/2281113.svg",
      "https://www.flaticon.com/svg/static/icons/svg/2281/2281113.svg",
      "https://www.flaticon.com/svg/static/icons/svg/2281/2281113.svg",
      "https://www.flaticon.com/svg/static/icons/svg/2281/2281113.svg",
      "https://www.flaticon.com/svg/static/icons/svg/2281/2281113.svg",
      "https://www.flaticon.com/svg/static/icons/svg/2281/2281113.svg",
      "https://www.flaticon.com/svg/static/icons/svg/2281/2281113.svg",
      "https://www.flaticon.com/svg/static/icons/svg/2281/2281113.svg",
    ];

    res.render("board", {
      cards: cardImages
    });
  });
};