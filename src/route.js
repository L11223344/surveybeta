
var express = require('express');
const userRoute = require('./User/user.route');
const surveyRoute = require('./Survey/survey.route')



const router = express()

// This is for User Route
router.use('/user', userRoute);
router.use('/survey', surveyRoute)


module.exports = router;