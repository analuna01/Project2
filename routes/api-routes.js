var db = require("../models");

module.exports = function (app) {

    // create a user
    app.post('/api/user', (req, res) => {
        db.user.create(req.body)
            .then(user => res.json(user))
    })
    // get all users
    app.get('/api/user', (req, res) => {
        db.user.findAll().then(users => res.json(users))
    })
};