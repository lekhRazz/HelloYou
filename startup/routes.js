const express = require('express');
const auth = require('../routes/auth');
const users = require('../routes/users');
const chat=require('../routes/chat');
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
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 600000
        }
    }));
    app.use((req, res, next) => {
        if (req.cookies._id && !req.session.user) {
            res.clearCookie('_id');        
        }
        next();
    });

    app.use((req, res, next) => {
        if (req.cookies._id && !req.session.user) {
            res.clearCookie('_id');        
        }
        next();
    });
    
    app.use('', auth);
    app.use('/helloyou/chat',chat);
    app.use('/helloyou/signup', users);

}