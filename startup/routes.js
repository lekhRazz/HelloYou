const express = require('express');
const auth = require('../routes/auth');
const users = require('../routes/users');
const chat=require('../routes/chat');
const landing=require('../routes/landing-route');
const profile=require('../routes/profile');
const home=require('../routes/home');
const bodyParser=require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

module.exports = function (app) {
    app.set('view engine', 'ejs');
    app.set('views', './public/views/');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cookieParser());

    app.use(session({
        key: '_id',
        secret: 'somerandonstuffs',
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge : new Date(Date.now() + 24 * 60 * 60 * 1000)
        }
    }));
    app.use((req, res, next) => {
        if (req.cookies._id && !req.session.user) {
            res.clearCookie('_id');        
        }
        next();
    });


    app.use('',landing);
    app.use('/signin', auth);
    app.use('/helloyou/home',home);
    app.use('/helloyou/chat',chat);
    app.use('/helloyou/profile',profile);
    app.use('/helloyou/signup', users);

}