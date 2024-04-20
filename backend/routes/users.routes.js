const express = require('express');
const userController = require('../controller/users.controller.js');
const router = express.Router();


router.post('/signup', userController.signUpUser);
router.post('/login', userController.loginUser);


module.exports = router;
