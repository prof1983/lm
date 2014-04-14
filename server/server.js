// LibreMoney Server 0.0.1

var express = require('express');
var StartPage = require("./page/start");

function Start(Port) {
	var app = express();

	//appRoute = app.Route;
	//appRouter = app.Router;

	// Create a static file server
	app.configure(function() {
	  app.use(express.static(__dirname + '/../public'));
	});

	app.get('/hello', function(req, res) {
		res.send('Hello world');
	});

	app.get('/start', function(req, res) {
		res.send(StartPage.Main(req, res));
	});

	app.listen(Port);
	console.log('Express server started on port %s', Port);
}

exports.Start = Start;
