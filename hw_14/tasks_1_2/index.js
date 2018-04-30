var http = require("http");
var fs = require("fs");
var events = require("events");
var emt =  new events.EventEmitter();


//Events description
emt.once("userEntered", function(){
	var d = new Date();
	console.log("User entered to the website at " + d.toLocaleString());
});

emt.on("mainPage", function(){
	console.log("User requested main page of the website");
});

emt.on("aboutSection", function(){
	console.log("User requested \'About\' section");	
});

emt.on("htmlRequest", function(){
	console.log("User requested \'Contact\' section");
});

emt.on("stopServer", function(){
	var d = new Date();
	console.log("Server is stopped by user at " + d.toLocaleString());
	server.close();
});

//Server 
var server = http.createServer(function(req, res){
	emt.emit("userEntered"); 
	
	if(req.url === "/"){
		emt.emit("mainPage");
		res.writeHead(200, { "Content-Type": "text/plain" });
	  res.write("Hello World!");
		res.end();
	}	

	if(req.url === "/about"){
		emt.emit("aboutSection");
		res.writeHead(200, { "Content-Type": "text/plain" });
		res.write("You\'re at \'About\' section");
		res.end();
	}

	if(req.url === "/contact"){
		emt.emit("htmlRequest");
		fs.readFile("contact.html", function(err, data) {
	    res.writeHead(200, {"Content-Type": "text/html"});
	    res.write(data);
	    res.end();
	  });
	}	

	if(req.url === "/stop"){
		emt.emit("stopServer");
	}
}).listen(3000, function(){
	console.log("You are listening to localhоst:3000");
});