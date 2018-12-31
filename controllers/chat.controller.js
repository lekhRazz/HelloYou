const {User,validate}=require('../models/users');


exports.getChatRoom=async(req,res)=>{
    // throw new Error('Could not get the chat.');
    if (req.session.user && req.cookies._id) {
        res.render('ChatBox',{user:req.session.user.userName,address:req.session.user.address,phone:req.session.user.phone});
      
    } else {
        res.redirect('/signin');
    }
}