const express = require('express');
const auth = require('../routes/auth');
const users = require('../routes/users');
const chat=require('../routes/chat');
const bodyParser=require('body-parser');
module.exports = function (app) {
    app.set('view engine', 'ejs');
    app.set('views', './public/views/');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }))
   
    app.use('', auth);
    app.use('/helloyou/chat',chat);
    app.use('/helloyou/signup', users);

}