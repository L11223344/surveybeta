const express = require('express');
const router = express.Router();
const { viewDelete, deleteSurvey, createSurvey, viewQuestion, viewFormSurvey, seespecificSurvey, createaSurveyResponse, seeLists, createAnalysis, creatingAnalysis } = require('./survey.controller')



// view the signup page
router.post('/create', createSurvey);

router.get('/viewquestion', viewQuestion);
router.get('/viewformsurvey', viewFormSurvey);
router.get('/specificsurvey/:id', seespecificSurvey);
router.post('/surveyresponse', createaSurveyResponse);
router.get('/createanalysis/:id', createAnalysis)
router.get('/list', seeLists);
router.post('/analysis', creatingAnalysis);
router.get('/delete/:id', deleteSurvey);

router.get('/viewdelete', viewDelete);


module.exports = router;