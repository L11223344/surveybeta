const User = require('../User/user.model')
const jwt = require('jsonwebtoken');
const queryString = require('query-string')

const checkUser = async (req, res, next) => {
    try {

        const username = req.body.username;
        const password = req.body.password;
        var token = req.headers.cookie;
        const tokens = queryString.parse(token)
        const auth_token = tokens.auth
        if (auth_token) {

            jwt.verify(auth_token, 'test', function (err, token_data) {
                if (err) {
                    return res.status(403).send('Error');
                } else {
                    req.user = token_data;
                    next();
                }
            });

        } else {
            res.redirect('/')
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    checkUser
}