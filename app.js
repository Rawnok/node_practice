const express = require('express');
const app = express(); //initializing express
const bodyParser = require('body-parser');

const path = require('path');
const routerAdmin = require('./routes/admin');
const routerShop = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false})); //to parse POST forms

app.get('/favicon.ico', (req, res) => res.status(204)); //prevent favicon request

// app.use('/admin', routerAdmin); //filtering only for /admin/...

app.use(express.static(path.join(__dirname,'public'))); //just the folder name you want statically

app.use(routerAdmin);
app.use(routerShop);


app.use((req,res,next) =>{
    res.status(404).send("<h1>Page Not found</h1>");
});

app.listen(3000);

//put it at the top, it will always run
// app.use('/', (req, res, next)=>{
//     //console.log("Common header"); // this will always run
//     next();
// });

// const server = http.createServer(app);

// // const server = http.createServer((req,res) => {
// //     console.log(req);
// // });

// server.listen(3000);