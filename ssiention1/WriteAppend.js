//ghi dữ liệu nối thêm
var fs =  require('fs');

var data ="\n chúc các bạn làm lab3 thành công nhé";
 

fs.appendFile('hello.txt' , data,'utf8' , function(err){
    if(err) throw err;
    console.log("Dữ liệu được nối thêm thành công!!!");
})