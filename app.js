const express = require('express')
const passport = require('./config/passport.js')
const Keyv = require('keyv')
const app = express()

const keyv = new Keyv('redis://localhost:6379')
keyv.on('error', err => console.log('Redis Connection Error', err))
const users = new Keyv('redis://localhost:6379', { namespace: 'users' })

const userData = {
  id: 1,
  name: "admin",
  password: "Admin&8181",
  created: 20230322,
  updated: 20230322
}

async function createUser(user) {
  await users.set('foo', user)
}

async function findUser(user) {

  await users.get('foo'); // 'users'
}
createUser(userData)
findUser(userData)
const PORT = 3000

app.use(express.json())
// app.use(passport.initialize())

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
    console.log('before', newNums)
  newNums = newNums.filter(i => i !== '' && i !== null && typeof i !== "undefined").sort((a, b) => (a-b))
  console.log('after', newNums)
  res.status(200).json({ status: 'success', newNums })
})

function authenticate(req, res, next) {
  passport.authenticate('token', function (err, user, info) {
    console.log('authenticate user', user)
    if (err) {
      return next(err)
    }

    if (!user) {
      res.status(401).json({ message: "Incorrect token credentials" })
    }

    req.user = user
    next()
  })
}

app.post('/login', authenticate, (req, res) => {
  const { name, password } = req.body
  console.log(name, password)
  if (!req.body.account || !req.body.password) {
    return res.json({ status: 'error', message: '請填寫帳號或密碼。' })
  }
  // if ( !name || !password ) throw Error('Name and Password is required!', {}, Error.prototype.code = 402)
})

app.listen(PORT, () => {
  console.log(`The backend application is running http://localhost:${PORT}`)
})