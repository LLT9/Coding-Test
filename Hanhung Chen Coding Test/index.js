const express = require("express"),
  app = express(),
  authRoute = require("./routes/authRoute"),
  productRoute = require("./routes/productRoute"),
  auth = require('./middleware/authorization')(),
  passport = require("passport"),
  localStrategy = require("passport-local").Strategy,
  bodyParser = require("body-parser"),
  session = require("express-session");

const defaultUser = { id:1, username:'admin', password:'Admin&8181'};

app.use(session({resave: false,  saveUninitialized: true,  secret: 'Test'  }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(auth.initialize());
passport.use(new localStrategy((username, password, done) => {
  if(username == defaultUser.username && password == defaultUser.password){
    done(null, defaultUser);
  }else{
    done(null, false);
  }
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user, done) => { done(null, user.id); });
passport.deserializeUser((id, done) => { if(id == defaultUser.id){ done(null, defaultUser); }else{ done(new Error("Session expired!"), false); } });

app.use(authRoute);
app.use(productRoute);

app.listen(8081, () => {
  console.log(`Server Started at 8081`);
});