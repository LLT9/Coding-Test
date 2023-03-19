const express = require('express')
const router = express.Router()
const hello = require('./modules/hello')
const sortnum = require('./modules/sortnum')
const login = require('./modules/login')
const loginNodb = require('./modules/noDB/login')
const isAuth = require('./modules/isAuth')

router.use('/hello', hello)
router.use('/sortnum', sortnum)
router.use('/login', login) // check admin data in database
router.use('/login', loginNodb) // check admin data in no database
router.use('/is_auth', isAuth)

module.exports = router
