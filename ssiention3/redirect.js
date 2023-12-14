var http = require('http');
var fs = require('fs');

http.createServer(function(req ,res){
    if (req.url == 'page-b.html'){
        res.writeHead(301,{"Localhost":"http://" +req.headers['host']+'page-a.html'});
        return res.end();
    }else{
        //read file 
          fs.readFile(req.url.substring(1), function (err, data) {
            if (err) {
              throw err;
            }
            // console.log(data.toString('utf8'));
            res.writeHead(200);
            res.write(data.toString('utf8'));
            return res.end();
          });
    }

}).listen(8085);