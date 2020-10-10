var express = require('express');
var router = express.Router();
var fs = require('fs');
const cookieChecker = require('./middleware/cookie').mainAcess;
/* GET home page. */
router.get('/',cookieChecker, function(req, res, next) {
  fs.readFile('./public/main/login.html','UTF-8',(err,data)=>{
    if(err){
      next(err);
      return;
    }

    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(data);
  })
});

module.exports = router;