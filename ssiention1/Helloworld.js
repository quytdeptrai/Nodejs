//khai bao thu vien
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("Node.js says hello!!! ");
    res.end();
}).listen(8080);