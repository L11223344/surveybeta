const express = require('express');
const router = express.Router();
const { checkUser } = require('../Middlewares/auth.middleware')
const { tournamentView, displaytheTournment, createNewTournament, createTournament, updateTournamant, viewTournament } = require('./tournament.controller')


router.get('/tournamentview', checkUser, tournamentView)
router.get('/createTournament', createNewTournament);
router.post('/create', createTournament);
router.get('/create', viewTournament);
router.post('/update/:id', updateTournamant);

module.exports = router;