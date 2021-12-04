
var express = require('express');
const userRoute = require('./User/user.route');
const tournamentRoute = require('./Tournament/tournament.route');
const playerRoutes = require('./Players/player.route');
const oppositionRoute = require('./Opposition/opposition.route')


const router = express()

// This is for User Route
router.use('/user', userRoute);

// This is for Tournament Route
router.use('/tournament', tournamentRoute);

// This is for players Route
router.use('/players', playerRoutes);

// this is for opposition

router.use('/opposition', oppositionRoute)


module.exports = router;