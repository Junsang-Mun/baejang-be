var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/api', function(req,res) {
    res.send('api');
});

app.post('/api/post', function(req, res){
    res.send(req)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
