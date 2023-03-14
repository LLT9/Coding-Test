const express = require('express')
const session = require('express-session')
const routes = require('./routes/index')
const passport =require('passport')
const app = express()
const port = 3000



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
  
app.use(routes)


app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})