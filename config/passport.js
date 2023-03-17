const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy


module.exports = (app) => {
  // initialize passport module
  app.use(passport.initialize())
  app.use(passport.session())
  // set local strategy of login
  passport.use(
    new LocalStrategy({ usernameField: 'name' }, (name, password, done) => {
      const adminName = 'admin'
      const adminPassword = 'Admin&8181'
      // check login user in assume table
      admin_acc
        .findOne({ name })
        .then((user) => {
          // check login name
          if (user.name !== adminName) {
            return done(null, false)
          }

          // check login password
          if (user.password !== adminPassword) {
            return done(null, false)
          }
          // return admin
          return done(null, user)
        })
        .catch((err) => done(err, false))

      //  find specific id of user in database, store user id in session
      passport.serializeUser((user, done) => {
        done(null, user.id)
      })
      // according to user id in session, find user data in database by this user id
      passport.deserializeUser((id, done) => {
        admin_acc
          .findById(id)
          .lean()
          .then((user) => done(null, user))
          .catch((err) => done(err, null))
      })
    })
  )
}
