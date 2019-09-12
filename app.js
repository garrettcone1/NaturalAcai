var express = require("express");
var app = express();

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Natural Acai Co. server started...");
});