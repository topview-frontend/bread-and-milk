module.exports = function(app) {
  app.use('/api/users', require('./api/user'));

  app.get('/', function(req, res) {
    res.send('This is the home page.');
  });
};
