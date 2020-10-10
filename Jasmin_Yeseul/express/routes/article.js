const express = require('express');
const router = express.Router();
const isValidAccess = require('./middleware/cookie').default;
const mysql = require('../db/mysql').init();

router.post('/',isValidAccess, function(req, res,next){
    mysql.query(`call new_article("${req.body.article}","${req.cookies.express}")`,function(err,result){
        if(err){
            console.log(err);
            next(new Error("글 생성에 실패 하였습니다."));
            return;
        }
        res.send(result[0]);
    })
})


router.get('/', isValidAccess, function(req, res, next){
    console.log(req.query);
    mysql.query(`call get_article(false, "${req.query.from}","${Number(req.query.limit)}")`, (err, result)=>{
        if(err){
            next(new Error("글을 불러오는 중에 문제가 생겼습니다."));
            return;
        }
        res.send(result[0]);
    })
})
module.exports = router