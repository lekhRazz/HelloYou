const { User, validate } = require('../models/users');


exports.getChatRoom = async (req, res) => {
    // throw new Error('Could not get the chat.');
    let file="http://localhost:3000/ProfileImage/"+req.session.user.profile_pic;

    if (req.session.user && req.cookies._id) {
        res.render('ChatBox',
            {
                userName: req.session.user.userName,
                address: req.session.user.address,
                phone: req.session.user.phone,
                profile_pic:file
            });

    } else {
        res.redirect('/signin');
    }
}