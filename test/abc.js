var http = require('http');
http.createServer( (req, res) => {
// Tell browser this is plain text
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('<h2>Hello World!</h2>');
}).listen(8180);
console.log('Server running at http://127.0.0.1:8180/');