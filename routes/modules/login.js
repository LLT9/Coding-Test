const express = require('express')
const router = express.Router()
const { checkAdmin } = require('../../controller/userAuth')

router.post('/', (req, res) => {
  const { name, password } = req.body
  return checkAdmin(name, password, res)
})

module.exports = router
