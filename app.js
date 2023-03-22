const express = require('express')
const app = express()

const PORT = 3000

app.use(express.json())

app.get('/hello', (req, res) => {
  res.status(200).json({ status: 'success', message: 'Hello World'})
})

app.listen(PORT, () => {
  console.log(`The backend application is running http://localhost:${PORT}`)
})