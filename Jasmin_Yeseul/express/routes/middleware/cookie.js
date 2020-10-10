module.exports = {
    default : function(req, res, next){
        if(req.cookies.express){
            next();
        }else{
            next(new Error("비정상적인 경로입니다."));
        }
    },
    mainAcess : function(req, res, next){
        if(req.cookies.express){
            res.redirect('/main');
        }else{
            next();
        }
    }
}