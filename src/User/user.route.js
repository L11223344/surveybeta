const express = require('express');
const router = express.Router();

const { createUser, userLogin, viewSignup, viewLogin, userLogout, changeUser, updateUser, formSurvey } = require('./user.controller')



// view the signup page
router.get('/signup', viewSignup);
router.get('/loginview', viewLogin)
router.post('/register', createUser);
router.post('/login', userLogin);
router.get('/logout', userLogout);
router.get('/changeuser', changeUser);
router.post('/changeuser', updateUser);
router.get('/surveys', formSurvey)


module.exports = router;