var express = require('express');
var passport = require('passport');
var router = express.Router();
var authController = require('../controllers/authorizationController')

router.post("/login", passport.authenticate("local") ,  authController.login)

module.exports = router