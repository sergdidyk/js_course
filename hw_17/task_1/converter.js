var request = require('request');
var fs = require('fs');
var url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

request(url, function(err, res, body) {
	fs.writeFileSync('rates.json', body);
});
var fileJson = fs.readFileSync('rates.json');  
var rate = JSON.parse(fileJson);  

var Converter = function(){
	this.buyRateUSD = rate[0].buy;
	this.buyRateEUR = rate[1].buy;
	this.buyRateRUR = rate[2].buy;
	this.buyRateBTC = rate[3].buy;
	this.saleRateUSD = rate[0].sale;
	this.saleRateEUR = rate[1].sale;
	this.saleRateRUR = rate[2].sale;
	this.saleRateBTC = rate[3].sale;
}

Converter.prototype.roundToDecimals = function(amount){
	return Math.round(amount * 100) / 100;
}

//Buy methods
Converter.prototype.buyUSD = function(currency){
	return this.roundToDecimals(currency * this.buyRateUSD);
}

Converter.prototype.buyEUR = function(currency){
	return this.roundToDecimals(currency * this.buyRateEUR);
}

Converter.prototype.buyRUR = function(currency){
	return this.roundToDecimals(currency * this.buyRateRUR);
}

Converter.prototype.buyBTC = function(currency){
	return this.roundToDecimals(currency * this.buyRateBTC);
}

//Sale methods
Converter.prototype.saleUSD = function(currency){
	return this.roundToDecimals(currency * this.saleRateUSD);
}

Converter.prototype.saleEUR = function(currency){
	return this.roundToDecimals(currency * this.saleRateEUR);
}

Converter.prototype.saleRUR = function(currency){
	return this.roundToDecimals(currency * this.saleRateRUR);
}

Converter.prototype.saleBTC = function(currency){
	return this.roundToDecimals(currency * this.saleRateBTC);
}

module.exports = Converter;