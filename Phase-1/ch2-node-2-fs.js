var ps = require("fs");
ps.writeFileSync("s1.txt", "50 -1 0 20 89 70 60 3 22");
data = ps.readFileSync("s1.txt" ,"utf-8");
console.log(data);
data = data.split(" ");
console.log(data);
d = data.sort((a,b)=> a-b);
console.log(d);