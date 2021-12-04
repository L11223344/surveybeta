const express = require('express');
const router = express.Router();
const Opposition = require('./opposition.model');
const { startedTournoments, semiFinialTournoment, finialRounds, lastRound } = require('./opposition.controller')



router.get('/startTournament', startedTournoments);
router.post('/startTournament', semiFinialTournoment);
router.post('/finialRound', finialRounds);
router.post('/lastRound', lastRound)


module.exports = router;