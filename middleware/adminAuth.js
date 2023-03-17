// return true or false according to the login status of the request
const authenticator = (req, res) => {
  if (req.isAuthenticated()) {
    return res.send('true')
  }
  return res.send('false')
}

module.exports = { authenticator }
