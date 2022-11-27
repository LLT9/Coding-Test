const LocalStrategy = require('passport-local').Strategy
const TokenStrategy = require('passport-accesstoken').Strategy;
const Keyv = require('keyv');
const crypto = require("crypto");

const memory = new Keyv()



module.exports = passport => {
	
	

	const users = [
	  {
		"login": "admin",
		"password": 'Admin&8181'
	  }
	]
	
	


	function createToken() {
	  
	  const new_token = crypto.randomBytes(16).toString("hex");
	  saveToken(new_token);
	  return new_token
	  
	}
	
	async function saveToken(new_token) {

	  await memory.set('token', new_token, 20000); // expiry: 20 seconds
	  
	}



  passport.use(new LocalStrategy(

    { usernameField: 'login', passReqToCallback: true },
    (req, login, password, done) => {
		
		
		const userFound = users.find(user => user.login === login && user.password === password)
	
		if(userFound!=null){
			
			console.log("Welcome! " + userFound.login)
			
			const x = createToken();
			
			return done(null, x)

		} else {
				console.log("User not Found")
				const error = "User not Found"
				return done(error, null)
				
			}
		
  
    }
  ))


	
	passport.use(new TokenStrategy(
		async function (token, done) {
			
			const retreivedToken = await memory.get('token')
			
			console.log('token from request is ' + token)
			console.log('saved token is ' + retreivedToken)
			
			
			if(token == retreivedToken ){
				
				
				console.log("token valid")
				return done(null);
			} else {
				
				const error = "token invalid or expired"
				console.log(error)
				return done(error)
			}

			
		}
	));
	

  // serialize user instance to the session
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  // deserialize user instance from the session
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })
}