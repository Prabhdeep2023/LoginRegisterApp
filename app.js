const express = require('express');
var cookieParser = require('cookie-parser');
var sessions = require('express-session');
var indexrouter = require('./routes/index');
var loginrouter = require('./routes/login');
var registerrouter = require('./routes/register');
var dashboardrouter = require('./routes/dashboard');

/*all four variables’ names should be in camel casing*/

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(sessions({
    secret : 'loginapp',
    resave : true,
    saveUninitialized : true
  }))
app.use(cookieParser());

app.use('/', indexrouter);
app.use('/login', loginrouter);
app.use('/register', registerrouter);
app.use('/logout', dashboardrouter);

app.set('view engine', 'hbs');
const path = require('path');
const publicdir = path.join(__dirname, './public');
app.use(express.static(publicdir));

app.listen(7123, () => {
    console.log();
})

module.exports = app;
