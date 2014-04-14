// LibreMoney Server 0.0.1

var express = require('express');

function start(Port) {
	var app = express();

	// Create a static file server
	app.configure(function() {
	  app.use(express.static(__dirname + '/../public'));
	});

	app.listen(Port);
	console.log('Express server started on port %s', Port);
}

exports.start = start;
