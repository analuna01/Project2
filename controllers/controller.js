var express = require("express");
var router = express.Router();


// Temp set up to code front end
router.get("/", function(request, response) {
    response.render("index");
});





module.exports = router;