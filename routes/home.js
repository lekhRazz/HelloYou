const express = require('express');
const router = express.Router();
const HomeController=require('../controllers/home.controller');
const sessionChecker = require('../middleware/sessionChecker');

router.get('/',HomeController.getHomePage);

router.post('/', async (req, res) => {

});

module.exports = router;