var http = require("http"),
	url = require("url"),
	fs = require("fs");
http.createServer(function(req,res){
	console.log(pathname);
	// var dirname  = __dirname;
	var pathname = url.parse(req.url).pathname;
	console.log(pathname);
  	fs.readFile("."+pathname, function readData(err, data) {
        res.writeHead(200);
        res.end(data);
    });
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');
// var express = require("express");
// var app     = express();
// var path    = require("path");


// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/webdemo/index.html'));
//   //__dirname : It will resolve to your project folder.
// });

// app.listen(80);

// console.log("Express server listening on port %d in %s mode", 80, app.settings.env);
