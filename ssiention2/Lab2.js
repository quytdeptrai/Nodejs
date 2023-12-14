var _cal = require('./Caculator')

//thu vien
var express = require('express');
var app = express();

//http://localhost:9999/calADD?a=9&b=2
app.get('/calADD' , function(req,res){
    var rs = 0;
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    rs = _cal.add(a,b);
    res.json(rs);
});

//ip Wifi 192.168.1.5
//http://localhost:9999/calSUB?a=9&b=2

// app.get("/calSUB", function (req, res) {
//   var rs = 0;
//   var a = parseInt(req.query.a);
//   var b = parseInt(req.query.b);
//   rs = _cal.sub(a, b);
//   res.json(rs);
// });

app.listen(9999);


// var a = 9;
// var b = 2;
// console.log('Cộng result:'+ _cal.add(a,b)); 
// console.log("Trừ  result:" + _cal.sub(a, b)); 
// console.log(" Nhân result:" + _cal.mul(a, b)); 
// console.log(" Chia result:" + _cal.div(a, b)); 