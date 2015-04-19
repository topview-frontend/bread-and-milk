var User = require('./user.model');

exports.index = function(req, res) {
  res.send('response user list.');
};

exports.create = function(req, res) {
  var newUser = new User(req.body);

  newUser.save(function(err, user) {
    if (err) {
      res.json('user existed');
      return;
    }
    res.json('user created');
  });
};
