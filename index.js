require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const jwt = require('jsonwebtoken')
const { sortArray } = require('./sortArray')
const { keyv } = require('./config/connection')

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
  try {
    const { name, password } = req.body
    const checkName = await keyv.get(name)
    const checkPassword = await keyv.get(password)
    const validName = 'admin'
    const validPassword = 'Admin&8181'
    // check existence of name or password
    if (!checkName || !checkPassword) {
      return res.status(400).send('User or password does not exist.')
    }

    // check input name and password whether are both correct
    if (checkName !== validName || checkPassword !== validPassword) {
      return res.status(400).send('Name or password wrong!')
    }
    // Both name and password are match
    if (checkName === validName && checkPassword === validPassword) {
      // create token
      const userToken = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
        expiresIn: '1h'
      })
      // save token in session
      sessionStorage.setItem('token', userToken)
      // return token to login user
      return res.status(200).send({ token: userToken })
    }
  } catch (err) {
    console.log(err)
  }
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
