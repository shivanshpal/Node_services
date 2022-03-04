const express = require('express');
const path = require('path');
const port = 8000;

const db=require('./config/mongoose');


const User=require('./models/user');

const Product=require('./models/product')

var usersRouter = require('./routes/user');
var productsRouter = require('./routes/product');



const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/users', usersRouter);
app.use('/products', productsRouter);


app.listen(port, function (err) {
    if (err) {
        console.log("error is :", error)
    }
    console.log("server is running successsfully on port: ", port);
})

