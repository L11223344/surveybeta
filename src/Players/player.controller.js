const Player = require('./player.model')
const Tournament = require('../Tournament/tournament.model');
const Opposition = require('../Opposition/opposition.model')


// View the player layout
const playerView = (req, res) => {
    const body = req.body;
    const id = req.params.id;

    console.log('id', req.params.id)
    res.render('pages/createPlayers.ejs', {
        id,
        body
    })
}
// create 16 player
const createSixteen = async (req, res) => {
    console.log('sixteen is calling')
    let oppositionArray = [];
    const tournomentId = req.body.id;
    const opponentArray = [];
    const playerone = req.body.playerone;
    const playertwo = req.body.playertwo;
    const playerthree = req.body.playerthree;
    const playerfour = req.body.playerfour;
    const playerfive = req.body.playerfive;
    const playersix = req.body.playersix;
    const playerseven = req.body.playerseven;
    const playereight = req.body.playereight;
    const playernine = req.body.playernine;
    const playerten = req.body.playerten;
    const playereleven = req.body.playereleven;
    const playertwelve = req.body.playertwelve;
    const playerthirteen = req.body.playerthirteen;
    const playerfourteen = req.body.playerfourteen;
    const playerfifteen = req.body.playerfifteen;
    const playersixteen = req.body.playersixteen;

    opponentArray.push(playerone);
    opponentArray.push(playertwo);
    opponentArray.push(playerthree);
    opponentArray.push(playerfour);
    opponentArray.push(playerfive);
    opponentArray.push(playersix);
    opponentArray.push(playerseven);
    opponentArray.push(playereight);
    opponentArray.push(playernine);
    opponentArray.push(playerten);
    opponentArray.push(playereleven);
    opponentArray.push(playertwelve);
    opponentArray.push(playerthirteen);
    opponentArray.push(playerfourteen);
    opponentArray.push(playerfifteen);
    opponentArray.push(playersixteen);

    const first = {
        playerone,
        playertwo
    }
    oppositionArray[0] = first;

    const second = {
        playerthree,
        playerfour
    }
    oppositionArray[1] = second;


    const third = {
        playerfive,
        playersix
    }
    oppositionArray[2] = third;

    const four = {
        playerseven,
        playereight
    }
    oppositionArray[3] = four;

    const five = {
        playernine,
        playerten
    }
    oppositionArray[4] = five;

    const six = {
        playereleven,
        playertwelve
    }
    oppositionArray[5] = six;

    const seven = {
        playerthirteen,
        playerfourteen
    }
    oppositionArray[6] = seven;

    const eight = {
        playerfifteen,
        playersixteen
    }
    oppositionArray[7] = eight;


    const d = await Opposition.create({ sixteen: oppositionArray });
    const player = new Player(req.body);
    const data = await player.save();
    console.log('data', data)
    const playerId = data._id;
    const tournament = await Tournament.findById(tournomentId);
    const tournamentData = {
        name: tournament.name,
        description: tournomentId.description
    }
    tournamentData.playerId = playerId;
    const updateToronoment = await Tournament.findByIdAndUpdate(tournomentId, {
        name: tournament.name,
        description: tournomentId.description,
        playerId: tournamentData.playerId
    });

    res.redirect('/v1/tournament/tournamentview')

}
// create a new Players
const createPlayer = async (req, res) => {
    let oppositionArray;
    const tournomentId = req.body.id;
    const opponentArray = [];
    const playerone = req.body.playerone;
    const playertwo = req.body.playertwo;
    const playerthree = req.body.playerthree;
    const playerfour = req.body.playerfour;
    const playerfive = req.body.playerfive;
    const playersix = req.body.playersix;
    const playerseven = req.body.playerseven;
    const playereight = req.body.playereight;
    opponentArray.push(playerone);
    opponentArray.push(playertwo);
    opponentArray.push(playerthree);
    opponentArray.push(playerfour);
    opponentArray.push(playerfive);
    opponentArray.push(playersix);
    opponentArray.push(playerseven);
    opponentArray.push(playereight);



    if (opponentArray.length == 8) {
        oppositionArray = [];

        const playerOne = req.body.playerone;
        const playerTwo = req.body.playertwo;
        const first = {
            playerOne,
            playerTwo
        }
        oppositionArray[0] = first;

        const playerThree = req.body.playerthree;
        const playerFour = req.body.playerfour;
        const second = {
            playerThree,
            playerFour
        }
        oppositionArray[1] = second;

        const playerFive = req.body.playerfive;
        const playerSix = req.body.playersix;
        const third = {
            playerFive,
            playerSix
        }
        oppositionArray[2] = third;

        const playerSeven = req.body.playerseven;
        const playerEight = req.body.playereight;
        const fourth = {
            playerSeven,
            playerEight
        }
        oppositionArray[3] = fourth;



    } else {
        console.log('iam more')
    }

    const d = await Opposition.create({ name: oppositionArray });
    console.log('d', d)
    const player = new Player(req.body);
    const data = await player.save();
    const playerId = data._id;
    const tournament = await Tournament.findById(tournomentId);
    const tournamentData = {
        name: tournament.name,
        description: tournomentId.description
    }
    tournamentData.playerId = playerId;
    const updateToronoment = await Tournament.findByIdAndUpdate(tournomentId, {
        name: tournament.name,
        description: tournomentId.description,
        playerId: tournamentData.playerId
    });
    console.log('ooooooo', oppositionArray)
    res.redirect('/v1/tournament/tournamentview')


}

// display palyers
const displayPlayer = async (req, res) => {
    const players = []
    const player = await Tournament.findById(req.params.id).populate('playerId');
    const total = JSON.stringify(player.playerId);
    const d = Object.keys(total).length;
    console.log('dddd', d)

    if (d < 300) {
        const status = true;
        players.push(player);
        console.log('players', players);
        console.log('status', status)
        res.render('pages/playerDisplay.ejs', {
            players,
            status
        }

        )
    }
    else {
        const status = false;
        console.log('iam else')
        players.push(player);
        console.log('players', players);
        console.log('status', status)
        res.render('pages/playerDisplay.ejs', {
            players,
            status
        }

        )
    }

}
module.exports = {
    playerView,
    createPlayer,
    displayPlayer,
    createSixteen

}