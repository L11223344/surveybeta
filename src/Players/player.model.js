var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    playerone: String,
    playertwo: String,
    playerthree: String,
    playerfour: String,
    playerfive: String,
    playersix: String,
    playerseven: String,
    playereight: String,
    status: {
        type: String,
        default: ""
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Players', PlayerSchema);