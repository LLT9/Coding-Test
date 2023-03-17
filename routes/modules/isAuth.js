const express = require('express')
const router = express.Router()
const passport = require('passport')
const { checkToken } = require('../../middleware/tokenAuth')

// add checkToken middleware
router.get(
  '/is_auth',
  checkToken,
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  })
)

module.exports = router
