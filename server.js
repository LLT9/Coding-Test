// Eden Leung
// Question 03

import express from "express";
import passport from "passport";
import LocalStrategy from "passport-local";
import crypto from "crypto";

const app = express();
app.use(express.json());
app.use(passport.initialize());

const sortnum = [];

// a. GET method /hello and return “Hello World”
// http://localhost:3000/hello
app.get("/hello", (req, res) => {
  res.status(200).send("Hello World");
});

// b. POST method /sortnum to take an array of numbers as input and return it backsorted ascendingly
// http://localhost:3000/sortnum/1
app.post("/sortnum/:num", (req, res) => {
  sortnum.push(req.params.num);
  res.status(201).send(sortnum.sort((a, b) => a - b));
});

// c. POST method /login to accept login and password as input, check that the login is “admin” and password “Admin&8181” then create an access token and returnthat token.
passport.use(
  new LocalStrategy((username, password, done) => {
    if (username === "admin" && password === "Admin&8181") {
      const token = crypto.randomBytes(32).toString("hex");
      return done(null, token);
    } else {
      return done(null, false);
    }
  })
);

// http://localhost:3000/login
// {
//     "username":"admin",
//     "password":"Admin&8181"
// }
app.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    res.status(200).send(req.user);
  }
);

app.all("*", (req, res, next) => {
  res.status(404).send("Not Found");
});

app.listen(3000);
