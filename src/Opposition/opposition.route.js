const express = require('express');
const router = express.Router();
const Opposition = require('./opposition.model');
const { sixteenLastRound, startedTournoments, semiFinialTournoment, finialRounds, lastRound, sixteenFirstRound, sixteenSecondRound, sixteenThirdRound } = require('./opposition.controller')



router.get('/startTournament', startedTournoments);
router.post('/startTournament', semiFinialTournoment);
router.post('/finialRound', finialRounds);
router.post('/lastRound', lastRound);
router.post('/sixteenfirstround', sixteenFirstRound);
router.post('/sixteensecondround', sixteenSecondRound);
router.post('/sixteenthirdround', sixteenThirdRound);
router.post('/sixteenlastround', sixteenLastRound)


module.exports = router;