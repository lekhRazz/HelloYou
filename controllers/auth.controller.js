const {User}=require('../models/users');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const Joi = require('joi');
var session = require('express-session');


exports.getLoginPage=async(req,res)=>{
    res.render('login');
}

exports.checkSignIn=async(req,res)=>{
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ userName: req.body.userName });
    if (!user) return res.status(400).render('login',{username_err_msg:'Invalid user name..'});

    const validPassword = await bcrypt.compare (req.body.password, user.password);
    if (!validPassword) return res.status(400).render('login',{password_err_message:'Invalid  password.'});

    req.session.user=user;
    res.redirect('/helloyou/chat');
}


function validate(req) {
    const schema = {
        userName: Joi.string().required(),
        password: Joi.string().required()
    }
    return Joi.validate(req, schema);
}