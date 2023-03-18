const con = require('../config/mysql')

// add update_ts column to record timestamp of auto updated and turns it to a unix timestamp
con.connect(function (err) {
  if (err) throw err
  console.log('Connected to MySQL!')
  const useDatabase = `USE test`
  const sql = `CREATE TABLE admin_acc (
    id INT AUTO_INCREMENT, 
    name VARCHAR(255),
    password VARCHAR(255), 
    created INT NULL, 
    update_ts timestamp on update current_timestamp,
    updated INT as (timestampdiff(second, '1970-01-01', update_ts)),
    PRIMARY KEY (id)
    )`
  con.query(useDatabase) // select database
  con.query(sql, function (err, result) {
    if (err) throw err
    console.log('Table created')
  })
  con.end()
})
