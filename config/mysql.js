require('dotenv').config()
const mysql = require('mysql')

function connect() {
  const con = mysql.createConnection({
    host: 'localhost',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  })
  return con
}

module.exports = connect
