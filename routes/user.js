var express = require('express');
var router = express.Router();
const db = require('../config/mongoose');
const User = require('../models/user');

router.use(express.urlencoded({
    extended: true
}));

router.get('/', function (req, res) {

    User.find({}, function (err, users) {
        if (err) {
            console.log('error in fetching the contacts from db');
            return;
        }

        res.render('userhome', {
            title: 'USER DATA',
            user_list: users
        });
    })

})
router.get('/adduser', function (req, res) {
    res.render('adduser')

})


router.post('/', function (req, res) {
    User.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        pincode: req.body.pincode

    }, function (err, newUser) {
        if (err) {
            console.log('error in creating a user');
            return;
        }
        console.log('***********', newUser);
        return res.redirect("back");

    })

})

module.exports = router;
