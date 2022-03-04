var express = require('express');
var router = express.Router();
const db = require('../config/mongoose');
const Product = require('../models/product')

router.use(express.urlencoded({
    extended: true
}));


router.get('/', function (req, res) {

    Product.find({}, function (err, products) {
        if (err) {
            console.log('error in fetching the contacts from db');
            return;
        }

        res.render('producthome', {
            title: 'PRODUCT DATA',
            product_list: products
        });
    })

})
router.get('/addproduct', function (req, res) {
    res.render('addproduct')

})

router.post('/', function (req, res) {
    Product.create({
        name: req.body.name,
        price: req.body.price,
        skucode: req.body.skucode,
        modelno: req.body.modelno,
        delivery: req.body.delivery,
        description: req.body.description,
        stock: req.body.stock

    }, function (err, newProduct) {
        if (err) {
            console.log('error in creating a product',err);
            return;
        }
        console.log('***********', newProduct);
        return res.redirect("back");

    })

})


module.exports = router;