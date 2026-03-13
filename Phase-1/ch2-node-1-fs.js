var ps = require("fs");
//ps.mkdirSync("node")
ps.writeFileSync("node/write.txt", "hello node");
ps.appendFileSync("node/write.txt", "hiiiiii");
data = ps.readFileSync("node/write.txt","utf-8")
console.log(data);


ps.renameSync("node/write.txt", "node/read.txt");
ps.copyFileSync("node/read.txt" , "node/copy.txt");
ps.unlinkSync("node/copy.txt");  