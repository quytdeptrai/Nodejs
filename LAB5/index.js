
//gọi express
const express  = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
app.use(bodyParser.urlencoded({extended:true}))

//set storage
//destination : đường dẫn
var storage = multer.diskStorage({
  //cb là kiểm tra file có thể lưu trữ hay ko
  //cb là thay đổi đường dẫn , đổi tên file...
  destination: function (req, file, cb) {
    //rằng buộc upload ảnh
    if (
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ){
      cb(null, "uploads");  //đưa file vào thư mục uploads
    }else{
      cb(new Error("Đây không phải là File ảnh"))
    }
       
  },

  //name file
  filename: function (req, file, cb) {
    // cb(null, file.originalname);   //file name gốc
    cb(null, Date.now() + '.jpg');
  },
});

//khai báo biến upload
var upload = multer({ storage : storage });

//get URL
app.get('/',function(req,res){
    // res.json({msg:'welcome to node JS multer'})
    res.sendFile(__dirname + '/views/form-upload.html');
});

//phương thức upload
//upload 1 ảnh
app.post("/uploadfile", upload.single("myFile"), (req ,res ,next)=>{
    const file = req.file;
    if(!file){
        const error = new Error('Please upload a file');
        error.httpStatusCode = 400
        return next(error);
    }
    console.log(req.file)
    res.send("Uploadfile thành công");
});

//upload nhiều ảnh
app.post("/uploadmultiplefile", upload.array("myFiles",12), (req, res, next) => {
  const files = req.files;
  if (!files) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  console.log(req.files);
  res.send("Uploadmultiplefile thành công");
});


app.listen(3000);