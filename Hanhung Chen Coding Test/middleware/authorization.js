var passport = require("passport");
var passportJWT = require("passport-jwt");
var config = require("../config.js");
var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;
var params = {
  secretOrKey: config.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("jwt")
};

module.exports = function() {
  var strategy = new Strategy(params, function(payload, done) {
    //console.log(JSON.stringify(payload))
    if(payload.expire<=Date.now()) {
      return done(new Error("Token expired!"), null);
    } else{
      return done(null, payload);
    }
  });
  passport.use(strategy);
  return {
    initialize: function() {
      return passport.initialize();
    },
    authenticate: function() {
      return passport.authenticate("jwt", config.jwtSession);
    }
  };
};