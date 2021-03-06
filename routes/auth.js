const express=require('express');
const router=express.Router();
const AuthController=require('../controllers/auth.controller');
const sessionChecker=require('../middleware/sessionChecker');


router.get('/' ,sessionChecker,AuthController.getLoginPage);

router.post('/',AuthController.checkSignIn);

module.exports=router;