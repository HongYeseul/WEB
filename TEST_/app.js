const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3000

app.set('view engine', 'jade');
app.set('views','./views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send(`<h1>login plz</h1>
    <form> 
        <input type="text" placeholder="ID"><br>
        <input type="text" placeholder="password">
    </form>
     Hello
     //동적인 파일 전송 -> 내용 변경 시 바로 변경이 안됨:app.js를 껐다 키기해야함₩
    `);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/dynamic',function(req,res){
    var time = Date();
    var lis = '';
    for(var i=0;i<10;i++){
      lis = lis + '<li>coding</li>';
    }
    var output = `
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title></title>
      </head>
      <body>
        Hello, Dynamic!
        <ul>
        ${lis}
        </ul>
        ${time}
      </body>
    </html>`
    res.send(output);
  });

  app.get('/form',function(req,res){
    res.render('form');
  });

  app.get('/topic/:id',function(req,res){
    var topics = [
      'Javascript is ...',
      'Node.js is ...',
      'Express is ...'
    ];
    var output = `
      <a href="/topic/0">Javascript</a><br>
      <a href="/topic/1">Node.js</a><br>
      <a href="/topic/2">Express</a><br><br>
      ${topics[req.params.id]}
    `
    res.send(output);
  });
  app.post('/form_receiver',function(req,res){
    var title = req.body.title;
    var description = req.body.description;
    res.send(title+','+description);
  });
  app.get('/topic/:id/:mode', function(req,res){
    res.send(req.params.id+','+req.params.mode)
  })