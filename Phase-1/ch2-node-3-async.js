var fs = require("fs");
fs.writeFileSync("test.txt" , "Hello World");
console.log("Syncironous file write complete");
console.log("outside");
fs.writeFile("test.txt" , "Hello World" , function(err){
    if(err){
        console.log("Error writing file"+err);
    }
    else{
        console.log(err)
        console.log("Asyncronous file write complete");
    }
});
console.log("outside");