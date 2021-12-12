const express = require('express');
const router = express.Router();
const { createSurvey, viewQuestion, viewFormSurvey, seespecificSurvey, createaSurveyResponse, seeLists } = require('./survey.controller')



// view the signup page
router.post('/create', createSurvey);

router.get('/viewquestion', viewQuestion);
router.get('/viewformsurvey', viewFormSurvey);
router.get('/specificsurvey/:id', seespecificSurvey);
router.post('/surveyresponse', createaSurveyResponse);
router.get('/list', seeLists)



module.exports = router;