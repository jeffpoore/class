var express = require('express');
var fs = require('fs');
var buffer = require('buffer');

var app = express.createServer(express.logger());

var buf1 = fs.readFileSync('index.html');
var str = buf1.toString('utf8');

app.get('/', function(request, response) {
    response.send(str);
}); 
//  response.send('Hello World this is Jeff!!');


//    var buf1 = fs.readFile(index.html)
//    var str = buf.toString('utf8')
//    response.send(str)
//
//    var str = buf.toString('utf8' fs.readFile(index.html)) 
//    respose.send(str)
//});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
