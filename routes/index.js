var express = require("express"),
	router = express.Router();

// Root Route
router.get("/", function(req, res){
	res.render("home");
});

// About Route
router.get("/about", function(req, res){
	res.render("about");
});

module.exports = router;