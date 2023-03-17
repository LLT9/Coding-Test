const checkToken = (req, res, next) => {
  const token = sessionStorage.token
  // check token whether is modified
  if (token) {
    return next()
  }
  throw new Error('Token is not valid!')
}

module.exports = { checkToken }
