var express = require('express');
var router = express.Router();
const mysql = require('../db/mysql').init();
const cookieChecker = require('./middleware/cookie').default;

/* GET users listing. */
router.get('/',cookieChecker, function(req, res, next) {
  mysql.query('call get_article(true, 1, 1)', (err,result) => {
    if(err){
      next(new Error("메인페이지를 불러오는 동안 문제가 발생하였습니다."));
      return;
    }
    res.render('main',{
      articleList : result[0],
      getArticleFunc : `getArticle(${result[0].length ? result[0][result[0].length -1].No : 0})`
    });
  })
});

module.exports = router;
