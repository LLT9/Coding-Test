const con = require('../config/mysql')

con.connect(function (err, rows) {
  if (err) throw err
  console.log('Connected to MySQL!')
  const useDatabase = `USE test`
  const sql = `INSERT INTO admin_acc (name, password, created) VALUES ('admin', 'Admin&8181', UNIX_TIMESTAMP())`
  con.query(useDatabase) // select database
  con.query(sql, function (err, result) {
    if (err) throw err
    console.log(`admin data inserted successfully.`)
  })
  con.end()
})
