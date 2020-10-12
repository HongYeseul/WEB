var express = require('express');
var router = express.Router();
const {Users} = require('../models');

/* 아이디가 존재하는지 검색  */
router.get('/', function(req, res, next) {
  Users.findAll({
    where : {userID:req.body.ID}
  }).then(result => {
    if(result.length == 0){
      res.send("아이디 없음");
    }else{
      res.send(result);
    }
  })
});

// 아이디 생성 
router.post('/', function(req, res, next){
  let ID = req.body.ID;
  Users.findAll({
      where : {userID : ID}
    }).then(result => {
      if(result.length==0){
        Users.create({
          userID : req.body.ID,
          UserName : req.body.Name,
          UserPW : req.body.Password,
          PhoneNum : req.body.Phone,
          Access : req.body.Access
        }).then(
          res.send("받음")
        )
      }else{
        res.send("중복");
      }
      res.send(result);
    }).catch(err=>{
      res.send("에러1")
      next(err); // 에러 발생시 무한로딩 되지 않게 해줌
    })
});

// 유저 정보 수정 
router.patch('/:id',async (req, res, next) => {
  Users.update({
    UserName : req.body.Name,
    UserPW : req.body.Password,
    PhoneNum : req.body.Phone,
    Access : req.body.Access,
  },{where : { userID : req.params.id}})
  .then((result)=>{
    if(result) res.send( `업데이트 성공 ${result}`);
    else res.send("err");
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  })
})

// 유저 정보 삭제
router.delete('/:id', async (req, res, next)=>{

  Users.destroy({where : {userID : req.params.id}})
  .then(result => {
    if(result) res.send(`삭제 성공 `);
    else res.send("유저 존재하지 않$음");
  })
  .catch((err) =>{
    console.log(err);
    next(err);
  })
})


module.exports = router;
