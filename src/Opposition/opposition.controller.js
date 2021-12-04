const Opposition = require('./opposition.model')


const startedTournoments = async (req, res) => {
    const opposition = await Opposition.find({});


    const Data = opposition[0].name;
    res.render('pages/firstround.ejs', {
        Data
    })
}

const semiFinialTournoment = (req, res) => {
    const Data = []
    const firstSelect = {
        playerone: req.body.playerone,
        playertwo: req.body.playertwo
    }
    const secondSelect = {
        playerthree: req.body.playerthree,
        playerfour: req.body.playerfour
    }
    Data.push(firstSelect);
    Data.push(secondSelect);
    res.render('pages/semiround.ejs', {
        Data
    })
}


const finialRounds = (req, res) => {
    const Data = []
    const firstSelect = {
        playerone: req.body.playerone,
        playertwo: req.body.playertwo
    }
    Data.push(firstSelect);
    console.log('data', Data)
    res.render('pages/finialround.ejs', {
        Data
    })
}


const lastRound = (req, res) => {
    const Data = []
    const firstSelect = {
        playerone: req.body.playerone
    }
    Data.push(firstSelect);
    res.render('pages/finishround.ejs', {
        Data
    })
}

module.exports = {
    startedTournoments,
    semiFinialTournoment,
    finialRounds,
    lastRound

}