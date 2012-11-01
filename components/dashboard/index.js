var path = require('path');

module.exports = function(app) {

  app.get('/dashboard', app.user.loggedIn, function(req, res) {
    return res.render(path.join(__dirname, 'dashboard'), {
      appmode: true,
      user: req.session.user
    });
  });

};