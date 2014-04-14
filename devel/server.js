// LibreMoney NodeJs 0.1

var http = require("http");
var url = require("url");


// ---- Functions ----

function Start(Route, Handle, Port) {

	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		Route(Handle, pathname, response, request);
	}

	http.createServer(onRequest).listen(Port);
	console.log("Server has started. Port="+Port);
}


// ---- Exports ----

exports.Start = Start;
