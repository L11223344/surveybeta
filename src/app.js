var express = require('express');
// const jwt = require('jsonwebtoken')
const path = require('path');
// var cookieParser = require('cookie-parser')

var app = express();
const routes = require('./route')
const DB = require('./config/connectDB');
DB()
const PORT = process.env.PORT || 3000;
// set the view engine to ejs
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
// app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/', express.static('./public'));
// use res.render to load up an ejs view file
app.get('/', (req, res) => {
    res.render('pages/index',
        {
            success: false,
            create: false
        }
    )
})
app.use('/v1', routes)

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
});
