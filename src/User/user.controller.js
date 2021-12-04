const jwt = require('jsonwebtoken')
const User = require('./user.model');
const queryString = require('query-string');

// View the signup page
const viewSignup = (req, res) => {
    res.render('pages/signup')
}
// User signup with these function
const createUser = async (req, res) => {
    const user = new User(req.body);
    const r = await user.save();
    res.render('pages/login.ejs')

}

// Here a user login with its email and password
const userLogin = async (req, res) => {

    const userExists = await User.find({
        email: req.body.email,
        password: req.body.password
    });
    if (userExists.length == 0) {
        res.redirect('/v1/user/loginview')

    } else {

        let requestEmail = userExists[0].email;
        let requestPass = userExists[0].password;
        var token = jwt.sign({ foo: requestEmail }, 'test');
        res.cookie('auth', token);
        res.render('pages/tournamentView.ejs')
    }

}


const viewLogin = async (req, res) => {
    res.render('pages/login')
}

const userLogout = (req, res) => {
    res.clearCookie("auth");
    res.redirect('/')
}

const changeUser = (req, res) => {
    var token = req.headers.cookie;
    const tokens = queryString.parse(token)
    const auth_token = tokens.auth;
    if (auth_token) {
        jwt.verify(auth_token, 'test', async (err, token_data) => {
            if (err) {
                return res.status(403).send('Error');
            } else {
                const user = await User.find({
                    email: token_data.foo,

                });
                console.log('user', user)
                res.render('pages/updateprofile.ejs', {
                    user
                })
            }
        });

    } else {
        res.redirect('/')
    }
}

const updateUser = async (req, res) => {
    var token = req.headers.cookie;
    const tokens = queryString.parse(token)
    const auth_token = tokens.auth;
    if (auth_token) {
        jwt.verify(auth_token, 'test', async (err, token_data) => {
            if (err) {
                return res.status(403).send('Error');
            } else {
                const user = await User.find({
                    email: token_data.foo,

                });
                console.log('user', user[0].id)
                const updateManagement = await User.findByIdAndUpdate(user[0].id, {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    country: req.body.country

                });
                res.redirect('/v1/user/loginview')

            }
        });

    } else {
        res.redirect('/')
    }


}

module.exports = {
    createUser,
    userLogin,
    viewSignup,
    viewLogin,
    userLogout,
    changeUser,
    updateUser
}