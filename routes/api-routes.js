var db = require("../models");
module.exports = function (app) {
    //returns the board table
    app.get("/api/board", function (req, res) {
        db.board.findAll({}).then(function (results) {
            res.json(results);
        });
    });
    //empties and refills current board
    app.put("/api/reset", function (req, res) {
        db.board
            .destroy({
                truncate: true,
                cascade: false,
            })
            .then(function (results) {
                db.board.bulkCreate([
                    { img_loc: "assets/cats/1.png", img_part: "a" },
                    { img_loc: "assets/cats/2.png", img_part: "b" },
                    { img_loc: "assets/cats/1.png", img_part: "a" },
                    { img_loc: "assets/cats/2.png", img_part: "b" }
                ], { individualHooks: true, validate: true })
                    .then(function (results) {
                        res.json(results);

                    })
            });
    });
    // create a user
    app.post("/api/user", (req, res) => {
        db.user
            .create({
                email: req.body.email,
                username: req.body.username,
                password: req.body.password,
            })
            .then(function (results) {
                res.json(results);
            });
    });
    //returns user with matching username and password
    app.get('/api/user', (req, res) => {
        console.log(req.body);
        db.user.findAll({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        }).then(users => res.json(users))
    })
};
