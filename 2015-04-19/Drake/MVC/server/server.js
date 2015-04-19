var express = require('./config/express');
// var express = require('express');
var config = require('./config/development');
var mongoose = require('mongoose');

mongoose.connect(config.dbUrl);

var app = express();
require('./routes')(app);

app.listen(9000);
console.log('server is running, listening port 9000');
