module.exports = (function(){
    return {
        local : {
            host : 'localhost',
            port : '3306',
            user : 'root',
            password : 'hys014081hys',
            database : 'express'
        },
        real : {
            host : 'localhost',
            port : '4000',
            user : 'root',
            password : 'hys014081hys~!',
            database : 'express'
        }, 
        dev : {
            host : 'localhost',
            port : '4000',
            user : 'root',
            password : 'hys014081hys~!',
            database : 'express'
        }
    }
})();