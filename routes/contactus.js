const express = require('express');
const router = express.Router();
const path = require('path');
const rootdir = require('../util/path');
router.get('/contactus',(req,res,next)=>
{
   
res.sendFile(path.join(__dirname,'../','viewers','contactus.html'));
    
});

router.post('/contactus',(req,res,next)=>
{
    console.log(req.body);
    res.redirect('/success');
    
});

module.exports=router;
