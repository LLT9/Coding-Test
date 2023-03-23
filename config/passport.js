const passport = require('passport')
const passportJWT = require('passport-jwt')
const db = require('../config/mysqldb.js')
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

const jwtOptions = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
}

passport.use('jwt', new JWTStrategy(jwtOptions, (jwtPayload, cb) => {
    return db.getConnection((err, connection) => {
    if (err) {
      console.log(err)
    } else {
      return connection.query('SELECT * FROM users where id = ? ', [jwtPayload.id],
        function (err, user) {
          let newUser = JSON.stringify(user)
          newUser = JSON.parse(newUser)
          if (err) { return cb(err) }
          if (!user || user.length === 0) return cb(null, false)
          return cb(null, newUser)
        }, connection.release())
    }})
}))

module.exports = passport