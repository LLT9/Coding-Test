require('dotenv').config()
const Keyv = require('keyv')
const keyv = new Keyv(process.env.MYSQL_URI)

keyv.on('error', (err) => console.log('Connection Error', err))

module.exports = { keyv }
