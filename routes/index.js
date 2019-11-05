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

// Menu Route
router.get("/menu", function(req, res){
	res.render("menu");	   
});

// Ingredients Route
router.get("/ingredients", function(req, res) {
	res.render("ingredients");
});

module.exports = router;