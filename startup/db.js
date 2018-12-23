const mongoose=require('mongoose');


module.exports=function(){
    mongoose.connect('mongodb://localhost/helloyou', { useCreateIndex: true, useNewUrlParser: true })
    .then(()=>console.log('Connected to MongoDB'))
    .catch(err=> console.log('Could not connect to MongoDB...',err));
}