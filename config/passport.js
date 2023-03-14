const passport = require('passport')
const LocalStrategy = require("passport-local")

passport.use(
    new LocalStrategy(
      {
        usernameField: "login",
        passwordField: "password",
      },
      (login, password, cb) => {
        const user = {
          login: login,
          password: password,
        }
        return cb(null, user)
      }
    )
  )
  

module.exports = passport