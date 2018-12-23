const {User,validate}=require('../models/users');
const _ = require('lodash');


exports.getLoginPage=async(req,res)=>{
    res.render('login');
}

exports.checkSignIn=async(req,res)=>{

}