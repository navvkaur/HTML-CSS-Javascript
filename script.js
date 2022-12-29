const express = require('express');
const path = require('path');
const bodyParser=require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootdir = require('./util/path');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'Public')));
app.use(adminRoutes);
app.use(shopRoutes);
app.use((req,res,next)=>
{
    
    res.status(404).sendFile(path.join(__dirname,'viewers','404.html'));
    
    
})
app.listen(3000);