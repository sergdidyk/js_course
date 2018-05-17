var weatherInformer = require('./weather_module');
var http = require('http');
var fs = require('fs');

var city = "beijing"; //Please, enter city name in English. (for example: Dnipro, London, New York...)

weatherInformer.weatherInCityNow(city);

http.createServer(function (req, res){
	fs.readFile('weatherInCity.html', function(err, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
}).listen(3000, function(){
	console.log("You are listening to localhost:3000");
});