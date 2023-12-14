var fs = require('fs');
var http = require('http');

http.createServer(function(req, res){
    fs.readFile('page-a.html', function(err,data){
    if (err) {
        throw err;
    }
    // console.log(data.toString('utf8'));
    res.writeHead(200);
    res.write(data.toString('utf8'));
    return res.end();
});
}).listen(9999)

