const express = require('express');
const router = express.Router();
const ProfileController=require('../controllers/profile.controller');
const sessionChecker = require('../middleware/sessionChecker');

router.get('/',ProfileController.getProfile);

router.post('/', async (req, res) => {

});

module.exports = router;