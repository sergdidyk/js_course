var request = require("request");
var fs = require("fs");
var http = require("http");
var url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

request(url, function(err, res, body) {  
		var exchangeRates = "";
		var obj = JSON.parse(body);
    for(var i = 0; i < obj.length; i++){
    	var rate = obj[i].ccy + " -> Buy: " + obj[i].buy + ". Sale: " + obj[i].sale + ".";
     	str = JSON.stringify(rate).replace(/\"/g, "");
    	exchangeRates += str + "\n";
    }

    fs.writeFile("exchangeRates.html", exchangeRates, function (err) {
		  if(err){
		  	throw err;
		  }
		  console.log("File \'exchangeRates.html\' is saved");
		});
});	

http.createServer(function (req, res){
	fs.readFile("exchangeRates.html", function(err, data){
		res.write(data);
		res.end();
	});
}).listen(3000, function(){
	console.log("Server on localhost:3000");
});