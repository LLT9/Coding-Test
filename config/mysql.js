require('dotenv').config()
const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD
})

module.exports = con
