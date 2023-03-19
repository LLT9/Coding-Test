const express = require('express')
const router = express.Router()
const { checkToken } = require('../../middleware/tokenAuth')
const { authenticator } = require('../../middleware/adminAuth')

// add checkToken middleware and check login status function
// database
router.get('/', checkToken, authenticator)
//no databsae
router.get('/nodb', checkToken, authenticator)

module.exports = router
