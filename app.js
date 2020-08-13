var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('bienvenidos a Southern legal tech ');
}).listen(8080);
