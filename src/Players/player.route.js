const express = require('express');
const router = express.Router();
const { playerView, createPlayer, displayPlayer } = require('./player.controller')


router.get('/playerview/:id', playerView);
router.post('/create', createPlayer);
router.get('/playerdisplay/:id', displayPlayer)

module.exports = router;