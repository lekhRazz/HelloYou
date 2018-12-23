const express=require('express');
const router=express.Router();
const ChatController=require('../controllers/chat.controller');
const {User,validate}=require('../models/users');

router.get('/' ,async(req,res)=>{
    res.render('home');
});


router.post('/',async(req,res)=>{
    
});

module.exports=router;