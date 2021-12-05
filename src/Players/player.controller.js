const Player = require('./player.model')
const Tournament = require('../Tournament/tournament.model');
const Opposition = require('../Opposition/opposition.model')


// View the player layout
const playerView = (req, res) => {
    const id = req.params.id
    res.render('pages/createPlayers.ejs', {
        id
    })
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
    players.push(player)
    res.render('pages/playerDisplay.ejs', {
        players
    }

    )
}
module.exports = {
    playerView,
    createPlayer,
    displayPlayer

}