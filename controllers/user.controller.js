const _ = require('lodash');
const bcrypt = require('bcrypt');
var session = require('express-session');
const { User, validate } = require('../models/users');


exports.getSignupForm = async (req, res) => {
    res.render('signup');
}

exports.createUser = async (req, res) => {

    let user = _.pick(req.body, ['firstName', 'lastName', 'userName', 'address', 'phone', 'recoveryEmail', 'password']);
    const { error } = validate(user);
    if (error) return res.status(400).send(error.details[0].message);

    user = await User.findOne({ userName: req.body.userName });
    if (user) return res.status(400).send('User already registered.');


    user = new User(_.pick(req.body, ['firstName', 'lastName', 'userName', 'address', 'phone', 'recoveryEmail', 'password']));
    console.log(user);

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    
    await user.save();
    req.session.user=user;
    res.redirect('/helloyou/chat');
}