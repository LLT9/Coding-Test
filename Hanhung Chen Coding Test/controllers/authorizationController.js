var config = require("../config.js"),
  jwt = require("jwt-simple");

exports.login = function (req, res) {
  if(req.body.username == 'admin' && req.body.password == 'Admin&8181'){
    var payload = {
      id: 1,
      expire: Date.now() + 1000 * 60 * 60, //1 hr
    };
    var token = jwt.encode(payload, config.jwtSecret);
    res.json({
      token: token,
    });
  }else{
    res.send('Login failed');
  }
};