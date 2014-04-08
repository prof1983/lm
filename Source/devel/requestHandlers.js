// LibreMoney NodeJs pages 0.1

var querystring = require("querystring");
var fs = require("fs");
//var formidable = require("formidable");

function upload(response, request) {
	console.log("Request handler 'upload' was called.");

	/* Prof1983 20140405
	var form = new formidable.IncomingForm();
	console.log("about to parse");
	form.parse(request, function(error, fields, files) {
		console.log("parsing done");

		// Possible error on Windows systems: tried to rename to an already existing file
		fs.rename(files.upload.path, "/tmp/test.png", function(err) {
			if (err) {
				fs.unlink("/tmp/test.png");
				fs.rename(files.upload.path, "/tmp/test.png");
			}
		});
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("received image:<br/>");
		response.write("<img src='/show' />");
		response.end();
	});
	*/
}

function show(response) {
	console.log("Request handler 'show' was called.");
	response.writeHead(200, {"Content-Type": "image/png"});
	fs.createReadStream("/tmp/test.png").pipe(response);
}

//exports.start = start;
exports.upload = upload;
exports.show = show;
