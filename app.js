var express = require("express"),
	app = express(),
	bodyParser = require("body-parser");

// Require routes
var homePageRoutes = require("./routes/homePage");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Natural Acai Co. server started...");
});