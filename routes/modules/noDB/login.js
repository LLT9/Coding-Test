const express = require('express')
const router = express.Router()
const { checkNodbAdmin } = require('../../../controller/userAuthNodb')
const passport = require('passport')

router.post('/', passport.authenticate('local'), (req, res) => {
  const { name, password } = req.body
  return checkNodbAdmin(name, password, req, res)
})

module.exports = router
