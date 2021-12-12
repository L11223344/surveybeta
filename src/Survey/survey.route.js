const express = require('express');
const router = express.Router();
const { createSurvey, viewQuestion, viewFormSurvey, seespecificSurvey, createaSurveyResponse, seeLists, createAnalysis, creatingAnalysis } = require('./survey.controller')



// view the signup page
router.post('/create', createSurvey);

router.get('/viewquestion', viewQuestion);
router.get('/viewformsurvey', viewFormSurvey);
router.get('/specificsurvey/:id', seespecificSurvey);
router.post('/surveyresponse', createaSurveyResponse);
router.get('/createanalysis/:id', createAnalysis)
router.get('/list', seeLists);
router.post('/analysis', creatingAnalysis)



module.exports = router;