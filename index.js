const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const { sortArray } = require('./sortArray')

app.get('/hello', (req, res) => {
  res.send('Hello World')
})

app.post('/sortnum', (req, res) => {
  const array = [2, 3, 5, 1, 4, 6, 15, 9]

  const result = sortArray(array)
  res.send({
    nums: array,
    sortArray: result
  })
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
