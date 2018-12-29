const express=require('express');
const router=express.Router();
const AuthController=require('../controllers/auth.controller');
const sessionChecker=require('../middleware/sessionChecker');


router.get('/',async(req,res)=>{
    res.redirect('/signin')
});

module.exports=router;