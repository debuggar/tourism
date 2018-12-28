var express = require('express');
var app = express();

//setting middleware
app.use(express.static(__dirname)); //Serves resources from public folder

//var server = app.listen(5000);
var port = 7000; 
var server = app.listen( port , function (){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
  

