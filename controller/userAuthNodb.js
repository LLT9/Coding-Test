require('dotenv').config()
const jwt = require('jsonwebtoken')
const keyv = require('../config/keyv')

async function checkNodbAdmin(name, password, req, res) {
  try {
    const validName = await keyv.get('name')
    const validPassword = await keyv.get('password')

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
  } catch (err) {
    console.log(err)
  }
}

module.exports = { checkNodbAdmin }
