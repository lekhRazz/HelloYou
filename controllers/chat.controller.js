const {User,validate}=require('../models/users');


exports.getChatRoom=async(req,res)=>{
    if (req.session.user && req.cookies._id) {
        res.render('home');
    } else {
        res.redirect('/signin');
    }
}