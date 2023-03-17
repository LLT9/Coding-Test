require('dotenv').config()
const express = require('express')
const session = require('express-session')
const passport = require('passport')
const app = express()
const port = 3000 || process.env.PORT
const { checkAdmin } = require('./controller/userAuth')
const { sortArray } = require('./controller/sortArray')
const { checkToken } = require('./middleware/tokenAuth')
const { usePassport } = require('./config/passport')

// invoke Passport function
usePassport(app)

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
)
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
  return checkAdmin(name, password, res)
})

// add checkToken middleware
app.get(
  '/is_auth',
  checkToken,
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  })
)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
