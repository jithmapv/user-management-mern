const userModel = require('../models/userModel');
const router = require('express').Router();

router.route('/user').get((req,res)=>{
    userModel.find().then((result)=>{
        res.json(result);
    }).catch((err)=>{
        console.log(err);
    })
});

module.exports = router;