const passport = require('passport')
const Keyv = require('keyv')
const TokenStrategy = require('passport-accesstoken').Strategy
var strategyOptions = {
  tokenHeader: 'x-custom-token',
  tokenField: 'custom-token'
}

const keyv = new Keyv('redis://localhost:6379')
keyv.on('error', err => console.log('Redis Connection Error', err))
const users = new Keyv('redis://localhost:6379', { namespace: 'users' })
// const tokens = new Keyv('redis://localhost:6379', { namespace: 'token' })


const userData = {
  id: 1,
  name: "admin",
  password: "Admin&8181",
  created: 20230322,
  updated: 20230322,
  token: 123
}

async function findUser(user) {
  const newUser = await users.get(user) // 'users'
  return newUser
}

passport.use(new TokenStrategy(strategyOptions,
  function (token, done) {
    users.find({ token: token }, function (err, user) {
      if (err) {
        return done(err)
      }

      if (!user) {
        return done(null, false)
      }

      if (!user.verifyToken(token)) {
        return done(null, false)
      }

      return done(null, user)
    })
    // User.findOne({ token: token }, function (err, user) {
    //   console.log('err', err, 'user', user)
    //   if (err) {
    //     return done(err)
    //   }

    //   if (!user) {
    //     return done(null, false)
    //   }

    //   if (!user.verifyToken(token)) {
    //     return done(null, false)
    //   }

    //   return done(null, user)
    // })
  }
))

module.exports = passport