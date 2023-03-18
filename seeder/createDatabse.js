const con = require('../config/mysql')

con.connect(function (err) {
  if (err) throw err
  console.log('Connected to MySQL!')
  con.query('CREATE DATABASE test', function (err, result) {
    if (err) throw err
    console.log('Database created')
  })
  con.end()
})
