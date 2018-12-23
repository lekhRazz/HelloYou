const express=require('express');
const router=express.Router();
const AuthController=require('../controllers/auth.controller');
const {User,validate}=require('../models/users');


router.get('/signin' ,AuthController.getLoginPage);

router.post('/',AuthController.checkSignIn);

module.exports=router;