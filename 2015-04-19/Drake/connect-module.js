var connect = require('connect');
var app = connect();

// connect middleware is just a function
var logger = function(req, res, next) {
  console.log(req.method, req.url);
  next();
};

var helloWorld = function(req, res, next) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello world :)');
};

var goodbyeWorld = function(req, res, next) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Goodbye world :D');
};

// the order of middleware, next()
app.use('/', logger);
// app.use(helloWorld);

// mounting middleware
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);

app.listen(9000);
console.log('Server is running, listening port 9000.');
