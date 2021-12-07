var mongoose = require('mongoose');

var OppositionSchema = new mongoose.Schema({
    name: {
        type: Array
    },
    sixteen: {
        type: Array
    },
    status: {
        type: String,
        default: ""
    },
    created_at: {
        type: Date,
        default: new Date().getTime()
    }
});

module.exports = mongoose.model('Opposition', OppositionSchema);