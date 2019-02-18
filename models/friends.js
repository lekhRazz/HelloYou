const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const friendSchema = new mongoose.Schema({
    me: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        default: null
    },
    friends:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        default: null
    },
    isFriend:{
        type:Boolean,
        default:false,
        required:false
    }
});
// userSchema.methods.generateAuthToken=function(){
//      const token=jwt.sign({_id:this._id,isAdmin:this.isAdmin},config.get('jwtPrivateKey'));
//      return token;
// }

const Friends = mongoose.model('Friends', friendSchema);

function validateUser(user) {
    const schema = {
       me:Joi.required(),
       friends:Joi.required()
    };

    return Joi.validate(user, friendSchema);
}

exports.Friends = Friends;
exports.validate = validateUser;