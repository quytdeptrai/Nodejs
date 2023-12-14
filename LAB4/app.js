//goi express
var express = require('express');
//tao app de cau hinh router
var app = express();

app.get('/',function(req,res){
    res.send(" Làm Lab4 Về EXPRESS JS VÀ HBS TEMPLATE");
});

//cấu hình handlbars
var expressHbs = require('express-handlebars');
app.engine(
  ".hbs",
  expressHbs.engine({ extname: ".hbs", defaultLayout: "main" })
);
//lưu template vào folder 'views'
app.set('view engine', ".hbs");

//chay len local host voi port 3000
app.listen(process.env.PORT || '3000');

//đưa layout vào đây
app.get('/app',function(req,res){
    res.render('index');//file name
})
