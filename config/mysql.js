require('dotenv').config()
const mysql = require('mysql')

function connect() {
  let con = mysql.createConnection({
    host: 'localhost',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  })
  con.connect(function (err) {
    if (err) {
      con = null
      return con
    }
    return con
  })
}

module.exports = connect
