// LibreMoney NodeJs router 0.1

function Route(handle, pathname, response, request) {
	console.log("About to route a request for " + pathname);

	/*
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("LibreMoney 0.1 - Handle="+handle+" PathName="+pathname);
	response.end();
	*/

	if (typeof handle[pathname] === 'function') {
		handle[pathname](response, request);
	} else {
		console.log("No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/html"});
		response.write("404 Not found");
		response.end();
	}
}

exports.Route = Route;
