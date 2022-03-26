/*
\    /\
 )  ( ')
(  /  )
 \(__)|     <- She catches my bug... maybe.
 */

const express = require('express');
const app = express();
const slashcat = String

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/api', function(req,res) {
    res.send(slashcat);
    res.status(200);
});

app.post('/api/post', function(req, res){
    res.send(req)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
