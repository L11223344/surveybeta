const Opposition = require('./opposition.model')


const startedTournoments = async (req, res) => {
    const opposition = await Opposition.find({});
    const lastLength = opposition.length - 1;
    const Data = opposition[lastLength].name;
    const Sixteen = opposition[lastLength].sixteen;
    const DataLength = opposition[lastLength].name.length;
    if (DataLength == 0) {
        res.render('pages/sixttenfirstround.ejs', {
            Sixteen
        })
    } else {
        res.render('pages/firstround.ejs', {
            Data
        })
    }

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



const sixteenFirstRound = async (req, res) => {
    const Sixteen = []
    const firstSelect = {
        playerone: req.body.playerone,
        playertwo: req.body.playertwo
    }
    const secondSelect = {
        playerthree: req.body.playerthree,
        playerfour: req.body.playerfour
    }
    const thirdSelect = {
        playerfive: req.body.playerfive,
        playersix: req.body.playersix
    }

    const fourthSelect = {
        playerseven: req.body.playerseven,
        playereight: req.body.playereight
    }
    Sixteen.push(firstSelect);
    Sixteen.push(secondSelect);
    Sixteen.push(thirdSelect);
    Sixteen.push(fourthSelect);

    res.render('pages/sixteensecondround.ejs', {
        Sixteen
    })
}



const sixteenSecondRound = (req, res) => {

    const Sixteen = []
    const firstSelect = {
        playerone: req.body.playerone,
        playertwo: req.body.playertwo
    }
    const secondSelect = {
        playerthree: req.body.playerthree,
        playerfour: req.body.playerfour
    }
    Sixteen.push(firstSelect);
    Sixteen.push(secondSelect);
    res.render('pages/sixteenthirdround.ejs', {
        Sixteen
    })
}

const sixteenThirdRound = (req, res) => {
    console.log('rewww', req.body);

    const Sixteen = []
    const firstSelect = {
        playerone: req.body.playerone,
        playertwo: req.body.playertwo
    }
    Sixteen.push(firstSelect);
    res.render('pages/sixteenfourthround.ejs', {
        Sixteen
    })
}

const sixteenLastRound = (req, res) => {

    const Sixteen = []
    const firstSelect = {
        playerone: req.body.playerone,
        playertwo: req.body.playertwo
    }
    Sixteen.push(firstSelect);
    res.render('pages/sixteenfinish.ejs', {
        Sixteen
    })
}

module.exports = {
    startedTournoments,
    sixteenThirdRound,
    semiFinialTournoment,
    finialRounds,
    lastRound,
    sixteenFirstRound,
    sixteenSecondRound,
    sixteenLastRound

}