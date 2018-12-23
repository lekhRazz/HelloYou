var session = require('express-session');

module.exports = (req, res, next) => {
    if (req.session.user && req.cookies._id) {
        res.redirect('/helloyou/chat');
    } else {
        next();
    }    
};
