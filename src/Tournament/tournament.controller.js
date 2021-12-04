
const jwt = require('jsonwebtoken');
const queryString = require('query-string');
const User = require('../User/user.model');
const Tournament = require('./tournament.model')

const tournamentView = async (req, res) => {
    const userExists = await User.find({
        email: req.user.foo,
    });
    if (userExists.length == 0) {
        res.redirect('/')

    } else {
        const tournoments = await Tournament.find({});
        console.log('tou', tournoments)
        res.render('pages/tournoment.ejs', {
            tournoments
        })
    }
}

const createNewTournament = async (req, res) => {
    res.render('pages/createTournment.ejs')
}

const createTournament = async (req, res) => {
    const tournment = new Tournament(req.body);
    const data = await tournment.save();
    const id = data._id
    const name = data.name;
    var token = req.headers.cookie;
    const tokens = queryString.parse(token)
    const auth_token = tokens.auth;

    jwt.verify(auth_token, 'test', function (err, token_data) {
        if (err) {
            return res.status(403).send('Error');
        } else {
            const foo = token_data.foo;
            res.render('pages/complectedTournoment.ejs', {
                name: name,
                id,
                foo
            })
        }
    });



}

const updateTournamant = async (req, res) => {
    console.log('body', req.body.complected)
    console.log('body', req.body.active)
    console.log('params', req.params.id)
    const tournoments = await Tournament.findByIdAndUpdate(req.params.id, {
        status: req.body.active ? "Active" : "complected"
    });
    res.redirect('/v1/tournament/tournamentview')
}



const viewTournament = (req, res) => {
    res.render('pages/tournamentView.ejs')
}
module.exports = {
    tournamentView,
    createNewTournament,
    createTournament,
    updateTournamant,
    viewTournament,

}