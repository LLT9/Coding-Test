const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000
const session = require('express-session')
const passport = require('passport')


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


// use express-session
app.use(session({
  secret: 'nksnfoiehhrekwqnrlkje',
  resave: 'false',
  saveUninitialized: 'false'
}))



app.use(passport.initialize())

app.use(passport.session())

// include strategy configuration
require('./config/passport')(passport)




app.get('/hello', (req, res) => {
  res.send('Hello World')
})



app.post('/sortnum', (req, res) => {
	
    //assume {"numbers":[5, 3, 1, 2, 4]} is sent in req.body
	
	var Arr = req.body.numbers
	
	if (typeof Arr === "undefined"){
		
		res.send("req.body.numbers is not defined")
		return
	} else if(!Array.isArray(Arr)){
		
		res.send("array is invalid")
		return
	}
	
	console.log(Arr); 

	for (var i = 1; i < Arr.length; i++)
		for (var j = 0; j < i; j++)
			if (Arr[i] < Arr[j]) {
			  var x = Arr[i];
			  Arr[i] = Arr[j];
			  Arr[j] = x;
			}
	
	console.log(Arr); 
	
	res.send(Arr) //[1, 2, 3, 4, 5]

});



app.post('/login',
  
  //assume { "login":"admin", "password": "Admin&8181" } is sent in req.body
 
  function (req, res, next) {
    
    passport.authenticate('local', function (error, token) {
      
      console.log('error is ' + error);
      console.log('token is ' + token);
	  
      if (error) {
        res.status(401).send(error);
      } else {
		  
		res.status(200).send(token);
      }

    })(req, res);
	
  });



app.get('/is_auth',

  //asumme { "token" : "token from last response" } is sent in req.body

  function (req, res, next) {
    
    passport.authenticate('token', function (error) {

      console.log('error is ' + error)
	  
	 if (error) {
			res.status(200).send('false');
			return
			}

        next();

    })(req, res);
  },


  function (req, res) {
	
	//console.log('req.user is '+ req.user)
    res.status(200).send('true');
	
	
  });




app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})


