require('dotenv').config()
const express = require('express')
const session = require('express-session')
const app = express()
const port = 3000 || process.env.PORT
const passport = require('passport')
const bodyParser = require('body-parser')
const usePassport = require('./config/passport')
const routes = require('./routes/index')

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
)
app.use(bodyParser.urlencoded({ extended: true }))

// // initialize passport module
app.use(passport.initialize())
app.use(passport.session())

// invoke Passport function
usePassport(passport)

app.use(express.json())
app.use(routes)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
