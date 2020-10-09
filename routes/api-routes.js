var db = require("../models");

module.exports = function (app) {

    //returns the board table
    app.get("/api/board", function (req, res) {
        db.board.findAll({}).then(function (results) {
            res.json(results);
        });
    });

    //empties current board
    app.put("/api/reset", function (req, res) {
        db.board.destroy({
            truncate: true,
            cascade: false
        }).then(function (results) {
            res.json(results);
        })
    })

};