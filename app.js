const express =require('express');
const bodyParser= require('body-parser');
const app =express();
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const contactRoutes = require('./routes/success');
//const path = require('./util/path');
const path =require('path');
const router =express.Router();


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));




app.use('/admin',adminRoutes);
app.use(contactRoutes);
app.use(shopRoutes);

router.get('/success',(req,res,next)=>{
    //res.sendFile(path.join(__dirname,'../','views','shop.html'));
    res.sendFile(path.join(rootDir,'views','success.html'));
   
});




//const server=http.createServer(app);
console.log("Server running!!!");

app.listen(4000);