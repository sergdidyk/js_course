var fs = require('fs');
var http = require('http');

// var file = fs.createWriteStream('demo.txt');
// for(var i = 0; i <= 50000; i++){
// 	file.write("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum provident quaerat vero repellendus ex ipsum numquam dolorum temporibus et placeat sed, enim impedit excepturi, obcaecati voluptatibus vitae. Facilis, magni, porro.");
// }
// file.end();

function getFileSize(){
	var stats = fs.statSync("demo.txt");
	var fileSizeMb = Math.floor(stats.size / 1000000.0);
	return fileSizeMb;
}
var fileSize = getFileSize();
console.log("File size: " + fileSize + "Mb");

http.createServer(function(req, res){
	if(req.url === "/stream"){
		if(fileSize > 10){
			var stream = fs.createReadStream("demo.txt");
			stream.pipe(res);
		}else{
			res.writeHead(200, { "Content-Type": "text/plain" });
	  	res.write("Your file is too small. Please, enter URL '/file'");
			res.end();
		}
	}else if(req.url === "/file"){
		if(fileSize < 10){
			fs.readFile('demo.txt', function(err, data){
				res.write(data);
				res.end();
			});
		}else{
			res.writeHead(200, { "Content-Type": "text/plain" });
	  	res.write("Your file is too heavy. Please, enter URL '/stream'");
			res.end();
		}
	}else{
		res.writeHead(200, { "Content-Type": "text/plain" });
	  res.write("Please, enter URL.");
		res.end();
	}
}).listen(3000, function(){
	console.log("You are listening to localhоst:3000");
});

/*
	Task 2
	Live-reload сервера сначала сделал с помощью модуля Nodemon - https://nodemon.io/. 
	Запуск через команду "nodemon index.js".
	С проблемой сохранения работы сервера при закрытии терминала справился установив модуль PM2 - http://pm2.keymetrics.io/
	Запуск через команду "pm2 start index.js".
	Потом обнаружил, что в PM2 есть команда "pm2 start index.js --watch", которая выполняет 
	тоже самое, что Nodemon. Поэтому, потребность в Nodemon отпадает.
*/