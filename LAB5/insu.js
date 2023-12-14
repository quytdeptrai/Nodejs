
var express = require('express');
var app = express();
var multer = require('multer');



var storage = multer.diskStorage({
    destination : function (req,file,cb){
        cb(null,'./uploads');
    },
      filename: function (req, file, cb) {
    cb(null, file.originalname);   //file name gốc
    // cb(null, Date.now() + '.jpg');
  },
});



var upload = multer({ storage: storage,limits:{fileSize:1*1024*1024}});


app.get("/", function (req, res) {
  // res.json({msg:'welcome to node JS multer'})
  res.sendFile(__dirname + "/views/form-upload.html");
});

var upload = upload.single('myFile');
app.post("/uploadfile", function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.send("Kích thước file lớn hơn 1MB");   
    } else {
      return res.send("Tệp không xác định");
      
    }
    console.log(req.file);
    res.send("thanhcong");
  });
});

app.listen(3000);