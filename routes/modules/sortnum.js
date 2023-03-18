const express = require('express')
const router = express.Router()
const { sortArray } = require('../../controller/sortArray')

router.post('/', (req, res) => {
  const { array } = req.body
  const result = sortArray(array)
  return res.send({
    sortArray: result
  })
})

module.exports = router
