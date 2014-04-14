// LibreMoney NodeJs main 0.1

var Server = require("./server");
var Router = require("./router");
var requestHandlers = require("./requestHandlers");

var Start = require("./start");

// ----

var Handle = {}
Handle["/"] = Start.Main;
/*
Handle["/"] = requestHandlers.start;
Handle["/start"] = requestHandlers.start;
Handle["/upload"] = requestHandlers.upload;
Handle["/show"] = requestHandlers.show;
*/

Server.Start(Router.Route, Handle, 80);
