const moment = require('moment')
moment.suppressDeprecationWarnings = true
const KeyvRedis = require('@keyv/redis')
const keyvRedis = new KeyvRedis('redis://localhost:6379')
keyvRedis.on('error', err => console.log('Redis Connection Error', err))
const token_valid = async (req, res, next) => {
  try {
    let token = req.headers?.authorization === undefined ? "" : req.headers?.authorization.split(' ')[1]
    if (!token) {
      return res
        .status(401)
        .json({ status: 'error', message: "No token!" })
    }
    let endTime = await keyvRedis.get(token)
    endTime = moment(endTime)
    const startTime = moment(endTime).subtract(10, 's')
    const timeOut = moment().isBetween(startTime, endTime)
    if (!timeOut) {
      await keyvRedis.delete(token)
      throw new Error('令牌失效 flase!')
    }
  } catch (err) {
    next(err)
  }
  next()
}

module.exports = { token_valid }