const mysql = require('mysql')
const db = mysql.createPool({
  user: 'root',
  password: 'password',
  host: 'localhost',
  port: '3306',
  database: 'coding-test',
  waitForConnections: true,
  connectionLimit: 10 //連線數上限
})

module.exports = db