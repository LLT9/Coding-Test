require('dotenv').config()
const express = require('express')
const session = require('express-session')
const app = express()
const port = 3000 || process.env.PORT
const { usePassport } = require('./config/passport')
const routes = require('./routes')

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

app.use(routes)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
