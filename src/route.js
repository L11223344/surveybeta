
var express = require('express');
const userRoute = require('./User/user.route');



const router = express()

// This is for User Route
router.use('/user', userRoute);



module.exports = router;