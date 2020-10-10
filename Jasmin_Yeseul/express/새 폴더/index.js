const http = require('http');

const hostname = localhost;
const port  = 3000;

const server = http.createServer((req, res) => {
    console.log("누군가 접속함");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})