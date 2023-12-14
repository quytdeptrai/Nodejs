



//chuong trinh ghi file 
var fs = require('fs');
var data = "Xin chào các bạn nhé ,NodeJs";

fs.writeFile('hello.txt',data,function(err){
    if(err) throw err; //neu ra loi
    console.log("Ghi dữ liệu thành công!!!")
});