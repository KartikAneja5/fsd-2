var u = require('url');
var adder = "https://localhost:8080default.html?year=2028&month=feb";
var q = u.parse(adder, true);
console.log(q);
console.log(q.host);
