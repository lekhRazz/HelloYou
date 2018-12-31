const { User, validate } = require('../models/users');


module.exports.getProfile=async(req,res)=>{
    const user=await User.findOne({userName:req.params.userName});
    if(!user) return res.status(404).send('user not found');
    res.render('profile',{user:user});
}