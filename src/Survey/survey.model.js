var mongoose = require('mongoose');

var SurveySchema = new mongoose.Schema({
    inputype: String,
    surveytime: String,
    question: {
        type: Array
    },
    answer: {
        type: Array
    },
    responseAns: {
        type: Array,
        default: ""
    },
    surveyname: String,
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Survey', SurveySchema);