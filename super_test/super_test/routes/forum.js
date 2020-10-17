var express = require('express');
var router = express.Router();
var session = require('express-session');
const {Forum} = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  
});

router.post('/create/:id', function(req, res, next){
  //글 쓰기
  console.log("HELLO");
  console.log(req.body.title + req.body.content);
  Forum.create({
    Category_id : 1,
    User_id : req.params.id,
    Title: req.body.title,
    Content : req.body.content,
    View_cnt : 0
  }).then(
    res.send("글 생성 완료")
  )
});


module.exports = router;
