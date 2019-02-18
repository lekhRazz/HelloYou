const express = require('express');
const router = express.Router();
const ProfileController=require('../controllers/profile.controller');
const sessionChecker = require('../middleware/sessionChecker');
const {upload}=require('../controllers/profile.controller')


router.get('/:userName',ProfileController.getProfile);

router.post('/:userName',upload.single("file"),ProfileController.uploadImage);
// router.put();

module.exports = router;