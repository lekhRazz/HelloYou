const _ = require('lodash');
const { User, validate } = require('../models/users');


exports.getSignupForm = async (req, res) => {
    res.render('signup');
}

exports.createUser = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ userName: req.body.userName });
    if (user) return res.status(400).send('User already registered.');

    console.log("you did routing properly");
    user = new User(_.pick(req.body, ['firstName', 'lastName', 'userName', 'address', 'phone', 'recoveryEmail', 'password']));
    console.log(user);
    await user.save();
    res.render('home');
}