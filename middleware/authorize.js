const jwt = require("jsonwebtoken")
const JWT_SECRET = "secret"


const authorize = async (req, res, next) => {
    try {
        const bearerHeader = req.headers.authorization
        if(typeof bearerHeader === 'undefined') {
            return res.status(403).json({error: "Authorization error"})
        }
        
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        
        //token verify
        const tokenVerify = await jwt.verify(bearerToken, JWT_SECRET)
        if(tokenVerify) {
            req.authorization = tokenVerify
            return next()
        }
        
      
    }catch (err) {
        console.log(err)
    }
    
}

module.exports = { authorize }