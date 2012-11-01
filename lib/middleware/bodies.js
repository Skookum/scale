var express = require('express');
var RedisStore = require('connect-redis')(express);

module.exports = function(app) {

  app.set('view engine', 'jade');

  // Sessions
  var sessions = express.session({
    store: new RedisStore()
  });

  // Cookies
  var cookies = express.cookieParser(app.config.session_secret);

  app.use(cookies);                                       // req.cookies
  app.use(sessions);                                      // req.session
  app.use(express.bodyParser());                          // req.body & req.files
  app.use(express.methodOverride());                      // '_method' property in body (POST -> DELETE / PUT)
};