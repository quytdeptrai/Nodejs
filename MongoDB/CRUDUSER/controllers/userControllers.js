
const express = require("express");
const userModel = require("../models/user");
const app = express();

//get
app.get('/' ,(req,res) => {
    res.render("users/addOrEdit.hbs", {
      viewTitle:"Người dùng thông tin"
    });
});

//add data
app.post("/add", async (req, res) => {
  console.log(req.body);
  if(req.body.id == ''){
    //add user
    addRecord(req,res);
  }else{
    //update user
    updateRecord(req,res);
  }
 
});
//
 function addRecord(req, res) {
   const u = new userModel(req.body);
   try {
     u.save(); 
     res.render("users/addOrEdit.hbs", {
       viewTitle: "Thêm người dùng thành công",
     });
   } catch (error) {
     res.status(500).send(error);
   }
 }
//
function updateRecord(req, res) {
  userModel
    .findOneAndUpdate({ _id: req.body.id }, req.body, { new: true })
    .then((doc) => {
      res.redirect("/user/list");
    })
    .catch((err) => {
      console.log(err);
      res.render("users/addOrEdit.hbs", {
        viewTitle: "Cập nhật lỗi",
      });
    });
}

//text data user
// app.get("/list", (req, res) => {
//   res.render("users/view-users.hbs", {
//     viewTitle: "Danh sách người dùng",
//   });
// });

//đổ dữ liệu lên user
app.get("/list", (req, res) => {
  userModel.find({}).then(users =>{
    res.render("users/view-users.hbs", {
      users: users.map((user) => user.toJSON()), //lấy nó theo kiểu json
    });
  })
});

//edit user =>xuất hiện lỗi MongooseError: Model.findById() no longer accepts a callback
//=> callback đã bị loại bỏ cho phương thức findById() của một mô hình Mongoose.
//=> Ở phiên bản Mongoose 6.0, phương thức findById() không còn chấp nhận một callback như một tham số nữa.
// app.get("/edit/:id", (req, res) => {
//   userModel.findById(req.params.id, (err, user) => {
//     if (!err) {
//       res.render("users/addOrEdit.hbs",  {
//         viewTitle: "Cập nhật người dùng",
//         user: user.toJSON(),
//       });
//     }
//   });
// });
app.get("/edit/:id", (req, res) => {
  userModel
    .findById(req.params.id)
    .then((user) => {
      res.render("users/addOrEdit.hbs", {
        viewTitle: "Cập nhật người dùng",
        user: user.toJSON(),
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/users");
    });
});

//delete user
app.get("/delete/:id", async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id, res.body);
    if (!user) res.status(404).send("Không tìm thấy mục nào");
    else{
      res.redirect("/user/list");
      console.log("xóa đối tượng thành công")
    }
    // res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = app;