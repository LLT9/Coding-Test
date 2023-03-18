require('dotenv').config()
const jwt = require('jsonwebtoken')
const connect = require('../config/mysql')

async function checkDBAdmin(name, password, req, res) {
  try {
    const con = connect()
    con.connect(function (err) {
      if (err) throw err

      const useDatabase = `USE test`
      const sql = `SELECT * FROM admin_acc`
      con.query(useDatabase)
      con.query(sql, function (err, result) {
        if (err) throw err

        const validName = result[0].name
        const validPassword = result[0].password

        // check input name and password whether are both correct
        if (name !== validName || password !== validPassword) {
          return res.status(400).send('name or password wrong!')
        }

        // Both name and password are match
        if (name.trim() === validName && password.trim() === validPassword) {
          // create token
          const userToken = jwt.sign(
            { user_id: validName },
            process.env.TOKEN_KEY,
            {
              expiresIn: '1h'
            }
          )
          // save token in session store
          req.session.token = userToken

          // return token to login user
          return res.status(200).send({ token: userToken })
        }
      })
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = { checkDBAdmin }
