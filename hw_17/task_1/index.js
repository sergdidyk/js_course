var Converter = require('./converter');

var converter = new Converter();

//Buy operations
console.log(converter.buyUSD(100));
console.log(converter.buyEUR(100));
console.log(converter.buyRUR(100));
console.log(converter.buyBTC(100));

//Sale operations
console.log(converter.saleUSD(100));
console.log(converter.saleEUR(100));
console.log(converter.saleRUR(100));
console.log(converter.saleBTC(100));