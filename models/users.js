const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }, lastName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    userName: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 50,
        unique: true
    },
    address: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    phone: {
        type: String,
        minlength: 6,
        maxlength: 12

    },
    recoveryEmail: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 255

    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    profile_pic: {
        type: String,
        required: false,
        default: null
    }
});
// userSchema.methods.generateAuthToken=function(){
//      const token=jwt.sign({_id:this._id,isAdmin:this.isAdmin},config.get('jwtPrivateKey'));
//      return token;
// }

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = {
        firstName: Joi.string().min(5).max(50).required(),
        lastName: Joi.string().min(1).max(50).required(),
        userName: Joi.string().min(4).max(50).required(),
        address: Joi.string().min(5).max(55).required(),
        phone: Joi.string().min(6).max(12).required(),
        recoveryEmail: Joi.string().min(5).max(50).required().email(),
        password: Joi.string().min(5).max(255).required()
    };

    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;