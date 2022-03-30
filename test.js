const http = require('http');
const fs = require('fs')
const port = 3000; //becuz main.js run on port 3000

const server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('test.html', function(error, data){
        if(error){
            res.writeHead(404);
            res.write('File Not Found');
        } else{
            res.write(data);
        }
        res.end();
    });
});

server.listen(port, function(error){
    if (error){
        console.log('something went wrong!', error);
    } else {
        console.log('server is running on port ' + port);
    }
});

/*
var http = require('http'); 

var server = http.createServer(function(request,response){ 

    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('Hello node.js!!');

});

server.listen(8080, function(){ 
    console.log('Server is running...');
});

*/