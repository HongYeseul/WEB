const http= require('http')
const Middleware = require('./Middleware')()
const Application = () => {

    const _server = http.createServer((req, res) =>{
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Hello World\n')
    });

    const listen = (port = 3000, hostname = '127.0.0.1', fn) => {
        _server.listen(port, hostname, fn);
    }

    const use = (path , fn) => {
        if(typeof path === 'string' && typeof tn === 'function'){
            fn._path = path;
        }else if(typeof path == 'function'){
            fn = path;
        } else{
            throw Error('Usage : use (path, fn) or use (fn)');
        }
        Middleware.add(fn);
    }
    return {
        _server, 
        listen,
        use
    }
    
}


module.exports = Application