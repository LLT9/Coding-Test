const express = require('express')
const app = express()

const PORT = 3000

app.use(express.json())

app.get('/hello', (req, res) => {
  res.status(200).json({ status: 'success', message: 'Hello World'})
})

app.post('/sortnum', (req, res) => {
  let { nums } = req.body
  let newNums = nums.split(',')
  const regex = /^\d+(,\d+)*,?$/
  if (nums.match(regex) === null) {
    return res.status(404).json({ status: 'error', message: '你輸入的資料有錯!' })
  }
  if (newNums.includes('')) {
    return res.status(404).json({ status: 'error', message: '資料最後面不能加逗號!' }) }
  newNums = newNums.filter(i => i !== '' && i !== null && typeof i !== "undefined").sort()
  res.status(200).json({ status: 'success', newNums })
})

app.listen(PORT, () => {
  console.log(`The backend application is running http://localhost:${PORT}`)
})