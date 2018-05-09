var request = require('request');
var fs = require('fs');

module.exports.weatherInCityNow = function(cityName){

	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=28e4aab20dd131172cb47f44cb1d9917";

	request(url, function(err, res, body) {
	 	if(err){
	  	throw err;
	  }

		var obj = JSON.parse(body);
		
		function createHtml(obj){
			var title = "Weather in " + obj.name + " now: <br>";
			var temp = "Temperature: " + obj.main.temp + "<br>";
			var pressure = "Pressure: " + obj.main.pressure + "<br>";
			var humidity = "Air humidity: " + obj.main.humidity + "\%<br>";
			var windSpeed = "Wind: " + obj.wind.speed + " m\/s<br>";
			var clouds = "Clouds: " + obj.clouds.all;
			var weather = title + temp + pressure + humidity + windSpeed + clouds;
			return weather;
		}

		fs.writeFile("weatherInCity.html", createHtml(obj), function (err) {
		  if(err){
		  	throw err;
		  }
		});
	});  
}