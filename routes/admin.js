const express = require('express');
const router = express.Router();
const path = require('path');
const rootdir = require('../util/path');
router.get('/add-product',(req,res,next)=>
{
    //console.log("I am another Middleware");
//     res.send(`<form action = "/product" method="POST" >
//     <label for="product">Product:</label><br>
//     <input type="text" id="product" name="product" ><br>
//     <label for="size">Size:</label><br>
//     <input type="number" id="size" name="size" ><br><br>
//     <input type="submit" value="Submit">
//   </form> `);
res.sendFile(path.join(__dirname,'../','viewers','add-product.html'));
    
});
router.post('/add-product',(req,res,next)=>
{
    console.log(req.body);
    res.redirect('/');
    
});

module.exports=router;