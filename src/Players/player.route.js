const express = require('express');
const router = express.Router();
const { playerView, createPlayer, displayPlayer, createSixteen } = require('./player.controller')


router.post('/playerview/:id', playerView);
router.post('/create', createPlayer);
router.get('/playerdisplay/:id', displayPlayer);
router.post('/createsixteen', createSixteen)

module.exports = router;