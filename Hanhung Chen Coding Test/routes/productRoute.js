var express = require("express");
var router = express.Router();
var auth = require("../middleware/authorization")();

router.get('/is_auth', auth.authenticate(), (req, res) => {
    res.send('true');
});

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.post('/sortnum', (req, res) => {
    var body = req.body;
    var valid = body.nums.every(element => {
        return typeof element === 'number';
    });
    if(valid){
        res.send(body.nums.sort((a, b)=> {return a - b;}));
    }else{
        res.send(`There has invalid numbers in ${body.nums}`);
    }
});

module.exports = router;