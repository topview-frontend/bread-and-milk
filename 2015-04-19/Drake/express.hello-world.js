var express = require('express');
var app = express();

app.use('/', function(req, res) {
  res.send({
    'name': 'Drake'
  });
});

app.listen(9000);
console.log('Server is running, listening port 9000.');
