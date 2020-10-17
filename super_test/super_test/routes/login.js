var express = require('express');
var router = express.Router();
var session = require('express-session');
const FileStore = require('session-file-store')(session); // 1
const {Users} = require('../models');

router.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
}));

//login 시도
router.post('/', function(req, res, next){
    Users.findAll({
        where : {
            userID : req.body.id, 
            userPW : req.body.pw
        }
    }).then(result => {
        //id를 입력 받았을 때
        if(result.length == 0){ 
            //일치하는 아이디 없음, 로그인 실패
            res.send("로그인 실패, 아이디 혹은 패스워드를 확인하세요.");
        }else{
            //로그인 성공
            req.session.logined = true;
            req.session.user_id = req.body.id;
            console.log("로그인");
            // res.send(`${req.body.id}님 안녕하세요. 로그인 되셨습니다.`);
            res.render('logout', {id: req.session.user_id});
        }
    }).catch(err=>{
        res.send("ERROR1");
        next(err);
    })
});

router.get('/', (req, res, next) => {  // 3
    if(req.session.logined){
    //   res.send(`안녕하세요 ${req.session.user_id}님, 로그아웃 하시겠습니까`);
        res.render('logout', {id: req.session.user_id});
    }else{
    //   res.send("로그인 하세요.");
        res.render('login');
    }
  });
  

router.post('/logout', (req, res) =>{
    req.session.destroy();
    res.send(`로그아웃 되셨습니다.
    <form action="/login" method="GET">
        <button type="submit">메인으로 돌아가기</button>
    </form>
    `);
  });

module.exports = router;