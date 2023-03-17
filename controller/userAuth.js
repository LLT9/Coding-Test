require('dotenv').config()
const { keyv } = require('../config/connection')
const jwt = require('jsonwebtoken')

async function checkAdmin(name, password, res) {
  try {
    const checkName = await keyv.get(name)
    const checkPassword = await keyv.get(password)
    const validName = 'admin'
    const validPassword = 'Admin&8181'
    // check existence of name or password
    if (!checkName || !checkPassword) {
      return res.status(400).send('User or password does not exist.')
    }

    // check input name and password whether are both correct
    if (checkName !== validName || checkPassword !== validPassword) {
      return res.status(400).send('Name or password wrong!')
    }
    // Both name and password are match
    if (checkName === validName && checkPassword === validPassword) {
      // create token
      const userToken = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
        expiresIn: '1h'
      })
      // save token in session
      sessionStorage.setItem('token', userToken)
      // return token to login user
      return res.status(200).send({ token: userToken })
    }
  } catch (err) {
    console.log(err)
  }
}

module.exports = { checkAdmin }
