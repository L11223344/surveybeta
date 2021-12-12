const Survey = require('./survey.model')



const createSurvey = async (req, res) => {
    const survey = new Survey(req.body);
    const r = await survey.save();
    const surveys = await Survey.find({
        surveytime: 'active'
    });

    res.render('pages/surveylist.ejs', {
        success: true,
        surveys
    })
}
const viewQuestion = (req, res) => {
    res.render('pages/createsurvey', {
        success: false
    })
}




const viewFormSurvey = (req, res) => {
    res.render('pages/createformsurvey', {
        success: true
    })
}




const seespecificSurvey = async (req, res) => {
    const surveyId = req.params.id;
    const lists = await Survey.findById(surveyId);
    res.render('pages/particularsurvey.ejs', {
        success: true,
        lists
    })

}


const createaSurveyResponse = async (req, res) => {

    console.log('hhhh', req.body.answer);
    const response = await Survey.create({ responseAns: req.body.answer });
    const surveys = await Survey.find({
        surveytime: 'active'
    });
    console.log('response', response);
    res.render('pages/surveylist.ejs', {
        success: true,
        surveys
    })

}


const seeLists = async (req, res) => {
    const surveys = await Survey.find({
        surveytime: 'active'
    });

    res.render('pages/surveylist.ejs', {
        success: true,
        surveys
    })
}




const createAnalysis = async (req, res) => {
    res.render('pages/createanalysis.ejs', {
        success: true,
    })
}

const creatingAnalysis = async (req, res) => {
    const surveys = await Survey.find({
        surveytime: 'active'
    });

    res.render('pages/surveylist.ejs', {
        success: true,
        surveys
    })
}

const deleteSurvey = async (req, res) => {
    const id = req.params.id;
    const deletedSurvey = await Survey.findOneAndDelete(id);
    const surveys = await Survey.find({
        surveytime: 'active'
    });

    res.redirect('/v1/survey/viewdelete')
}


const viewDelete = async (req, res) => {
    const surveys = await Survey.find({
        surveytime: 'active'
    });

    res.render('pages/surveylist.ejs', {
        success: true,
        surveys
    })
}

module.exports = {
    createSurvey,
    viewQuestion,
    viewFormSurvey,
    seespecificSurvey,
    createaSurveyResponse,
    seeLists,
    createAnalysis,
    creatingAnalysis,
    deleteSurvey,
    viewDelete
}