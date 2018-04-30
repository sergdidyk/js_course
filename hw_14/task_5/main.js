var url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
var p = document.querySelector(".rates>p");
var exchangeRates = "";

var request = new XMLHttpRequest();

request.open('GET', url, true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    
    for(var i = 0; i < data.length; i++){
    	var rate = data[i].ccy + " -> Buy: " + data[i].buy + ". Sale: " + data[i].sale + ".";
     	str = JSON.stringify(rate).replace(/\"/g, "");
     	exchangeRates += str + "<br>";
    }

   	p.innerHTML = exchangeRates;

  } else {
    console.log("Target server returned an error");
  }
};

request.send();

