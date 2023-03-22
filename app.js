const express = require('express')
const passport = require('./config/passport.js')
const Keyv = require('keyv')
const moment = require('moment')
const app = express()

const keyv = new Keyv('redis://localhost:6379')
keyv.on('error', err => console.log('Redis Connection Error', err))
const users = new Keyv('redis://localhost:6379', { namespace: 'users' })

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
  newNums = newNums.filter(i => i !== '' && i !== null && typeof i !== "undefined").sort((a, b) => (a-b))
  res.status(200).json({ status: 'success', newNums })
})

async function authenticate(req, res, next) {
  await createUser(userData)
  const newUser = await findUser(1)
  passport.authenticate('token', function (err, user, info) {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.status(401).json({ message: "Incorrect token credentials" })
    }
    req.user = user
    next()
  })(req, res, next)
}

app.post('/login', async (req, res) => {
  const userData = {
    id: 1,
    name: "admin",
    password: "Admin&8181",
    created: new Date(),
    updated: new Date()
  }
  const newUser = await users.set('admin', userData)
  const { name, password } = req.body
  if (!name || !password) {
    return res.status(401).json({ status: 'error', message: '請填寫帳號或密碼。' })
  }
  const user = await users.get(name)
  if (!user) return res.status(401).json({ status: 'error', message: '此帳號不存在。' })
  if (password !== user.password) return res.status(401).json({ status: 'error', message: '密碼錯誤!' })
  const token = 'asd'
  // const payload = { id: user.id }
  // const token = jwt.sign(payload, process.env.JWT_SECRET)
  return res.status(200).json({
    status: 'success',
    message: 'ok',
    token: token,
    user
  })
})

app.listen(PORT, () => {
  console.log(`The backend application is running http://localhost:${PORT}`)
})