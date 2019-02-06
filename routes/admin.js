const express = require("express");

const router = express.Router();

router.get('/product', (req,res,next)=>{
    console.log("product page");
    res.send('<form action="/addproduct" method="POST"> <input type="text" name="title"> <button type="submit">Add product</button> </form>');
});

//filtering request as POST
router.post('/addproduct', (req,res,next) =>{
    console.log(req.body);
    res.redirect('/');//express method
});

module.exports = router;