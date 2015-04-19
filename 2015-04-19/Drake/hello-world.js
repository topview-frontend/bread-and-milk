var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end("Hello world :)");
});

server.listen(9000);
console.log('Server is running, listening port 9000.');
