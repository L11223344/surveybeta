var mongoose = require('mongoose');

var TournamentSchema = new mongoose.Schema({
    name: String,
    description: String,
    status: {
        type: String,
        default: ""
    },
    playerId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Players'
    },
    created_at: {
        type: Date,
        default: new Date().getTime()
    }
});

module.exports = mongoose.model('Tournament', TournamentSchema);