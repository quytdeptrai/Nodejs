

const express = require('express');
const mongoose = require('mongoose');

//khai báo thư viện
const bodyParser = require('body-parser');
const exphdbs = require('express-handlebars');
const userController = require('./controllers/userControllers');
//


// const userRouter = require('./routes/userRoutes');
const url =
  "mongodb+srv://quocpcpd06159:olgpVkOuFObRCNHm@cluster0.agtaxzj.mongodb.net/dbUserManagerPolyDN?retryWrites=true&w=majority";
const app = express();

//sử dụng thư viện bodyparser
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());
// app.engine('.hbs',exphdbs());
app.engine(
  ".hbs",
  exphdbs.engine({ extname: ".hbs", defaultLayout: "main" })
);
app.set('view engine','.hbs');
//

app.use(express.json());
mongoose.connect(url,{useUnifiedTopology:true ,useNewUrlParser:true});
// app.use(userRouter);

//Web Server NodeJS CRUD
app.use('/user',userController);
//
app.listen(9000,() => {console.log('server is running');
})