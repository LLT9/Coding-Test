const express = require('express')
const router = express.Router()
const hello = require('./modules/hello')
const sortnum = require('./modules/sortnum')
const login = require('./modules/login')
const isAuth = require('./modules/isAuth')

router.use('/hello', hello)
router.use('/sortnum', sortnum)
router.use('/login', login)
router.use('/is_auth', isAuth)

module.exports = router
