const express=require('express');
const path =require('path');
const app =express();
const rootDir=require('../util/path');
const router =express.Router();



router.get('/',(req,res,next)=>{
    //res.sendFile(path.join(__dirname,'../','views','shop.html'));
    res.sendFile(path.join(rootDir,'views','shop.html'));
   
});

router.use(function (req, res, next) {
    res.status(404).sendFile(path.join(__dirname,'../','views','pageNotFound.html'));
  })

module.exports=router;