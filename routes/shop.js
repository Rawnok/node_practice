const path = require('path');
const express= require('express');

const router = express.Router();

const rootDir = require('../util/root');

//if we use 'use', then we will end up to this route no matter what, but get works only when we match '/'
router.get('/', (req,res,next)=>{
    console.log("home page");
    //res.send("<h1>Hello from Home page</h1>");
    //res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});


module.exports = router;