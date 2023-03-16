const express = require('express')
const app = express()
const port = 3000 || process.env.PORT

app.get('/hello', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
