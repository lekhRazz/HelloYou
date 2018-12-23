const express=require('express');
const router=express.Router();
const AuthController=require('../controllers/auth.controller');
const sessionChecker=require('../middleware/sessionChecker');


router.get('/signin' ,sessionChecker,AuthController.getLoginPage);

router.post('/checksignin',AuthController.checkSignIn);

module.exports=router;