var express = require("express"),
	app = express(),
	bodyParser = require("body-parser");

// Require routes
var homePageRoutes = require("./routes/index");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Connect public directory to get stylesheets
app.use(express.static(__dirname + "/public"));

// Use Routes
app.use(homePageRoutes);

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Natural Acai Co. server started...");
});