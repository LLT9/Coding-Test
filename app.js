if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const moment = require('moment')
const express = require('express')
const jwt = require('jsonwebtoken')
const KeyvRedis = require('@keyv/redis')
const keyvRedis = new KeyvRedis('redis://localhost:6379')
keyvRedis.on('error', err => console.log('Redis Connection Error', err))
const db = require('./config/mysqldb.js')

const { apiErrorHandler  } = require('./middleware/error-handler.js')
const { authenticated } = require('./middleware/auth.js')
const { token_valid }= require('./middleware/token_valid.js')

const app = express()

const PORT = 3000

app.use(express.json())

app.get('/hello', (req, res) => {
  res.status(200).json({ status: 'success', message: 'Hello World'})
})

app.post('/sortnum', async (req, res) => {
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

app.post('/login', async (req, res) => {
  const { name, password } = req.body
  if (!name || !password) {
    return res.status(401).json({ status: 'error', message: '請填寫帳號或密碼。' })
  }
  db.getConnection((err, connection) => {
    if (err) {
      throw new Error('連線問題!')
    } else {
      connection.query('SELECT * FROM users where name = ? ', [name],
        async function (err, user) {
          let newUser = JSON.stringify(user)
          newUser = JSON.parse(newUser)
          if (!user) return res.status(401).json({ status: 'error', message: '此帳號不存在。' })
          const payload = { id: newUser[0]['id'] }
          const startTime = moment()
          const endTime = moment(startTime).add(10, 's')
          const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 10 })
          await keyvRedis.set(token, endTime)
          return res.status(200).json({
            status: 'success',
            message: 'ok',
            token: token,
            user: newUser[0]
          })
        }, connection.release())
    }})
})

app.get('/is_auth', token_valid, authenticated, (req, res) => {
  return res.status(200).json({ status: 'success', message: '令牌有效 true' })
})

app.use('/', apiErrorHandler)
app.listen(PORT, () => {
  console.log(`The backend application is running http://localhost:${PORT}`)
})