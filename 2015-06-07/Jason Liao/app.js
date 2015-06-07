var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var myMiddleware = require('./lib/myMiddleware');
var app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');

app.use(bodyParser());
app.use(myMiddleware);
app.use(express.static(path.join(__dirname, '/public')));
app.use(function (err, req, res, next) {
  res.send(err.message);  
});

var items = [{
  todo: 'foo'
}, {
  todo: 'boo'
}];

app.get('/', function (req, res) {
  res.render('index', {
    title: 'My app',
    items: items
  });
});

app.post('/add', function (req, res) {
  var newItem = req.body.newItem;
  items.push({todo: newItem});
  res.redirect('/');
});

app.listen(3000, function (req, res) {
  console.log('Server started on port 3000');
});
