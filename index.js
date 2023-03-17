require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const { checkAdmin } = require('./controller/userAuth')
const { sortArray, sortNumsArray } = require('./controller/sortArray')

app.use(express.json())

app.get('/hello', (req, res) => {
  res.send('Hello World')
})

app.post('/sortnum', (req, res) => {
  const { array } = req.body
  const result = sortArray(array)
  res.send({
    sortArray: result
  })
})

app.post('/login', async (req, res) => {
  const { name, password } = req.body
  checkAdmin(name, password, res)
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
