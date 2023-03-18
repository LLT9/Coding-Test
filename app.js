const express = require("express");
const session = require('express-session');
const mysql = require('mysql');
const app = express();
const port = 9999;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

app.get("/", function (req, res) {
  res.send("Hello World!");
  // res.json();
});

app.post("/sortnum" , function(req,res){
  // const nums= [4, 1156, 8, 10, 211, 100];
  const nums = req.body;
  nums.sort((a, b) => a - b);
  res.json(nums);
});

const conn = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost:3030',
  user: 'admin',
  password: 'Admin&8181',
  database: 'test_db'
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'Admin&8181') {
  
      const token = generateToken();
      const expiryDate = new Date(Date.now() + 60 * 60 * 1000);

      req.session.token = token;
      req.session.expiryDate = expiryDate;

      res.json({ token });
  } else {

      res.status(401).json({ message: 'Invalid username or password' });
  }

});

function generateToken() {
  return crypto.randomBytes(16).toString('hex');
}
