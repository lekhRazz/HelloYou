const express=require('express');
const router=express.Router();
const ChatController=require('../controllers/chat.controller');
const sessionChecker=require('../middleware/sessionChecker');

router.get('/' ,ChatController.getChatRoom);

router.post('/',async(req,res)=>{
    
});

module.exports=router;