var express = require('express');
var fs = require('fs');
var buf1 = require('buffer');

var app = express.createServer(express.logger());

var buf1 = fs.readFileSync('index.html');
var str = buf1.toString('utf8');

app.get('/', function(request, response) {
    response.send(str);
}); 

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
