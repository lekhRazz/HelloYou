const { User, validate } = require('../models/users');
const multer = require('multer');
const path = require('path');
var fs = require('fs');

module.exports.getProfile = async (req, res) => {
    const user = await User.findOne({ userName: req.params.userName });
    if (!user) return res.status(404).send('user not found');
    let file = "http://localhost:3000/ProfileImage/" + user.profile_pic;
    res.render('profile',
        {
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            address: user.address,
            phone: user.phone,
            recoveryEmail: user.recoveryEmail,
            profile_pic: file

        });
}

module.exports.uploadImage = async (req, res) => {
    let username = req.params.userName;
  
    // let users = await User.findOne({ userName: username });
    // let oldfile = users.profile_pic;

    // fs.unlink(`../public/ProfileImage/${oldfile}`,function(err){
    //     if(err) throw err;
    //     console.log('File deleted!');
    // });

    let user = await User.findOneAndUpdate({ userName: username }, {
        profile_pic: req.file.filename
    }, { new: true });

    
    console.log(user);
    res.redirect(`/profile/${req.params.userName}`);
}




const storage = multer.diskStorage({
    destination: './public/ProfileImage/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});

module.exports.upload = multer({
    storage: storage,
    // limits: { fileSize: 1000000 },
    fileFilter: function (req, file, callback) {
        checkImageType(file, callback);
    }
});

function checkImageType(file, callback) {
    const imagetype = /jpeg|jpg|png|gif/;
    const extname = imagetype.test(path.extname(file.originalname).toLocaleLowerCase());
    if (extname) {
        return callback(null, true);
    } else {
        return callback("Error: Images only");
    }
}

