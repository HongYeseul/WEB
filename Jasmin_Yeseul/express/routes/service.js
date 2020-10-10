var express = require('express');
var router = express.Router();
var fs = require('fs');
const mysql = require('../db/mysql').init();
const moment = require('moment');
require('moment-timezone');

moment.tz.setDefault('Asia/Seoul');

// login
router.post('/login',(req,res,next) => {
  mysql.query(`call express.login("${req.body.id}","${req.body.pw}")`,(err,result)=>{
    if(err){
      next(err);
      return;
    }
    if(result[0][0].isValid){
      const expires = moment().add(1,'hours').format('ddd, DD MMM YYYY HH:mm:ss')+' GMT';
      res.cookie('express',`${req.body.id}`,{
        Expires : expires
      }).status(201).send("성공");
    }else{
      res.status(202).send("비밀번호와 아이디를 확인해주세요.");
    }
  });
})

/* GET home page. */
router.get('/join', function (req, res, next) {
  fs.readFile('./public/service/join.html', 'UTF-8', (err, data) => {
    if (err) {
      next(err);
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  })
});

router.post('/join', (req, res, next) => {


  mysql.query(`call express.join('${req.body.id}','${req.body.password}', '${req.body.email}')`, (err, result) =>{
    if(err){
      console.log(err);
      next(err);
      return;
    }

    if(result[0][0].status){
      res.status(202).send("이미 존재하는 아이디 입니다.");
    }else{
      res.status(201).send("가입을 축하드립니다.");
    }
  })

})

module.exports = router;