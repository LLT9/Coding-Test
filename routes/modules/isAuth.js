const express = require('express')
const router = express.Router()

const { checkToken } = require('../../middleware/tokenAuth')
const { authenticator } = require('../../middleware/adminAuth')

// add checkToken middleware and check login status function
router.get('/', checkToken, authenticator)

module.exports = router
