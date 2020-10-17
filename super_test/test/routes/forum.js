var express = require('express');
var router = express.Router();
const {Forum} = require('../models');

router.post('/create/:id', function(req, res, next) {
    //글 쓰기
    // console.log("HELLO");
    // console.log(req.body.title + req.body.content);
    Forum.create({
      userName: req.body.name,
      userID: req.params.id,
      title: req.body.title,
      content: req.body.content,
    }).then(
      res.send("글 생성 완료")
    )
});

router.get('/', function(req, res, next) {
    //게시글 출력, title만 나와야함
    Forum.findAll().then(result=>{
        console.log(result[0].title);
        if(result.length == 0){
            res.send("내용 없음");
        }else{
            var result2 = new Array();
            for(var i=0; i<result.length;i++){
                // result2[i].id = result[i].id;
                result2[i] = result[i].title;
            }
            res.send(result2);
        }
    })
});

//게시글 클릭했을 때, 상세페이지
router.get('/:id', function(req, res, next){
    Forum.findAll({
        where : {id : req.params.id}
    }).then(result => {
        if(result.length == 0){
            res.send("존재하는 게시글이 없습니다.");
        }else{
            res.send(result);
        }
    })
})

//아이디별 게시글 출력
router.get('/search/:name', function(req, res, next){
    Forum.findAll({
        where : { userID : req.params.name}
    }).then(result=>{
        if(result.length ==0){
            res.send("게시글이 없습니다.");
        }else{
            res.send(result);
        }
    })
})

router.patch('/:id', async (req, res, next) =>{
    //게시글 업데이트
    Forum.update({
        title: req.body.title,
        content: req.body.content,
    }, {where: {id: req.params.id}})
    .then((result) =>{
        if(result) res.end("업데이트 성공");
        else res.end("err");
    })
    .catch((err)=>{
        console.err(err);
        next(err);
    })
})

router.delete('/:id', async(req, res, next) =>{
    Forum.destroy({where : {id : req.params.id}})
    .then(result => {
        if(result) res.send("삭제 성공");
        else res.send("게시글 삭제 오류");
    })
    .catch((err)=>{
        console.log(err);
        next(err);
    })
})

module.exports = router;