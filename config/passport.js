const passport = require('passport')
const TokenStrategy = require('passport-accesstoken').Strategy
var strategyOptions = {
  tokenHeader: 'x-custom-token',
  tokenField: 'custom-token'
}

passport.use(new TokenStrategy(strategyOptions,
  function (token, done) {
    console.log('doken', token)
    User.findOne({ token: token }, function (err, user) {
      console.log('err', err, 'user', user)
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
  }
))

module.exports = passport
// passport.serializeUser((user, cb) => {
//   console.log('serializeUser', user)
//   cb(null, user.id)
// })
// passport.deserializeUser((id, cb) => {
//   console.log('deserializeUser', id)
//   User.findByPk(id, {
//     include: [
//       { model: Restaurant, as: 'FavoritedRestaurants' },
//       { model: Restaurant, as: 'LikedRestaurants' },
//       { model: User, as: 'Followers' },
//       { model: User, as: 'Followings' }
//     ]
//   })
//     .then(user => cb(null, user.toJSON()))
//     .catch(err => cb(err))
// })