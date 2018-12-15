const express = require('express');
const auth = require('../routes/auth');
const users = require('../routes/users');

module.exports = function (app) {
    app.set('view engine', 'ejs');
    app.set('views', './public/views/');
    app.use(express.json());

    app.use('', auth);
    app.use('/api/chat', users);

}