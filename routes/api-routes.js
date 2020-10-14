const { data } = require("jquery");
var db = require("../models");
module.exports = function (app) {
    //======================================================================
    //BOARD CALLS
    //======================================================================
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
    //======================================================================
    //USER CALLS
    //======================================================================
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

    // User Login
    //returns user with matching username and password
    app.post('/api/user/login', (req, res) => {
        // console.log(req.body);
        db.user.findAll({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        }).then(users => {
            res.json(users);
            console.log('User Login Response: ' + users);
        });
    })
    //======================================================================
    //LEADERBOARD CALLS
    //======================================================================
    // app.get('/api/leaderboard', (req,res) => {
    //     db.leaderboard.findAll({}).then(function (data) {
    //         var handlebarObject = {
    //             users: data
    //         };
    //         // console.log(data);
    //         console.log(handlebarObject);

    //         res.render("leaderboard", data.leaderboard);
    //     });
    // });

    app.get('/api/leaderboard', (req,res) => {
        db.leaderboard.findAll({}).then(data => res.render("leaderboard", {users: data}));
        // console.log(users);
    });

    app.post("/api/leaderboard", (req, res) => {
        db.leaderboard
            .create({
                time: req.body.time,
                username: req.body.username
            })
            .then(function (results) {
                res.json(results);
            });
    });


};
