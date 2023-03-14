const express = require("express")
const router = express.Router()
const passport = require("../config/passport")
const { authorize } = require('../middleware/authorize')

const jwt = require("jsonwebtoken")
const JWT_SECRET = "secret"

router.get("/hello", (req, res) => {
  res.json("Hello World")
})

router.post("/sortnum", (req, res) => {
  const nums = req.body.nums
  if (!nums || !Array.isArray(nums)) {
    return res.status(400).json({ error: "Please provide an array of numbers" })
  }

  const sortedNums = nums.sort((a, b) => a - b)
  res.json({ sortedNums })
})

//login
router.post(
  "/login",
  passport.authenticate("local", { session: false, failureMessage: true }),
  (req, res) => {
    try {
      if (req.user.password === "Admin&8181" && req.user.login === "admin") {
        delete req.user.password
        const token = jwt.sign(req.user, JWT_SECRET, { expiresIn: "30d" })

        req.session.accessToken = token;

        return res.json({ token, user: req.user })
      }
      res.status(401).json({ error: "login or password not correct"})
    } catch (err) {
      res.status(400).json({ error: "login error" })
    }
  }
)

router.get('/is_auth', authorize, (req, res) => {
    if (req.authorization && req.authorization.login === "admin") {
        res.json({ isAuth: true})
    }else {
        res.json({ isAuth: false})
    }
    
})

module.exports = router
