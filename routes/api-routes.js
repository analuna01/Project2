var db = require("../models");

module.exports = function (app) {

<<<<<<< HEAD
    // create a user
    app.post('/api/user', (req, res) => {
        db.user.create(req.body)
            .then(user => res.json(user))
    })
    // get all users
    app.get('/api/user', (req, res) => {
        db.user.findAll().then(users => res.json(users))
    })
=======
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

>>>>>>> 21426175094aaf5711fb958085dd180e39e3f0c7
};