const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const keyv = require('./keyv')
const adminData = require('../json/admin.json')

const customFields = {
  usernameField: 'name'
}

const verifyCallback = async (name, password, done) => {
  const userData = adminData
  const validName = await keyv.get('name')
  const validPassword = await keyv.get('password')
  // check login status of admin
  if (name === validName && password === validPassword) {
    return done(null, userData)
  }

  // used to serialize the user for the session
  passport.serializeUser((adminData, done) => {
    return done(null, adminData.id)
  })

  // used to deserialize the user
  passport.deserializeUser((adminData, done) => {
    return done(null, adminData)
  })

  return done(err, user)
}

const usePassportNodb = (passport) => {
  const strategy = new LocalStrategy(customFields, verifyCallback)
  passport.use(strategy)
}

module.exports = usePassportNodb
