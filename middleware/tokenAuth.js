require('dotenv').config()
const jwt = require('jsonwebtoken')

const checkToken = (req, res, next) => {
  const token = req.session.token
  const payload = jwt.verify(token, process.env.TOKEN_KEY)

  // check token whether is valid
  if (
    payload &&
    payload.exp * 1000 > Date.now() &&
    payload.user_id === 'admin'
  ) {
    return next()
  }
  throw new Error('Token is not valid!')
}

module.exports = { checkToken }
