const {User}=require('../models/users');

exports.postSearchRequest=async(req,res)=>{
    const searchData=req.body.searchName;
    const user =await User.findOne({userName:/^searchData/});
    if(!user) return res.status(404).send('data canot be found');
    console.log(user);
    res.redirect('/searchlist');
}

exports.getSearchResult=async(req,res)=>{
    res.render('search-list');
}