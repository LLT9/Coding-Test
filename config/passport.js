const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const connect = require('./mysql')

const customFields = {
  usernameField: 'name'
}

const verifyCallback = (name, password, done) => {
  const con = connect()
  const useDatabase = `USE test`

  con.connect(function (err) {
    if (err) throw err
    console.log('Connected to MySQL!')

    const sql = `SELECT * FROM admin_acc WHERE name = 'admin'`
    con.query(useDatabase)
    con.query(sql, function (err, result) {
      if (err) return done(err)

      const userData = result[0]
      const validName = result[0].name
      const validPassword = result[0].password
      // check login status of admin
      if (name === validName && password === validPassword) {
        return done(null, userData)
      }

      return done(null, false)
    })
  })

  // used to serialize the user for the session
  passport.serializeUser((user, done) => {
    return done(null, user.id)
  })

  // used to deserialize the user
  passport.deserializeUser((id, done) => {
    const con = connect()
    const sql = `SELECT * FROM admin_acc WHERE id = ${id}`
    con.query(useDatabase)
    con.query(sql, function (err, result) {
      const data = result
      if (err) {
        return done(err, user)
      }
      return done(null, data[0])
    })
  })
}

const usePassport = (passport) => {
  const strategy = new LocalStrategy(customFields, verifyCallback)
  passport.use(strategy)
}

module.exports = usePassport
