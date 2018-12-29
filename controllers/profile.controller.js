

module.exports.getProfile=async(req,res)=>{
    res.render('profile',{user:req.session.user.userName,address:req.session.user.address,phone:req.session.user.phone});
}