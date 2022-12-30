const express = require('express');
const path = require('path');
const bodyParser=require('body-parser');

const app = express();
app.set('view engine','pug');
app.set('views','viewers');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactus = require('./routes/contactus');

const rootdir = require('./util/path');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactus);

app.use('/success',(req,res,next)=>
{
    
    res.sendFile(path.join(__dirname,'viewers','success.html'));
    
    
})
app.use((req,res,next)=>
{
    
    res.status(404).sendFile(path.join(__dirname,'viewers','404.html'));
    
    
})
app.listen(3000);
