const express = require('express');                         // The name of the constant "express" should be in upper case style
var cookieParser = require('cookie-parser');
var sessions = require('express-session');
var indexrouter = require('./rouexpresstes/index');         // The name of the variable "indexrouter" should be in camel case style
var loginrouter = require('./routes/login');                // The name of the variable "loginrouter" should be in camel case style
var registerrouter = require('./routes/register');          // The name of the variable "registerrouter" should be in camel case style
var dashboardrouter = require('./routes/dashboard');        // The name of the variable "dashboardrouter" should be in camel case style

const app = express();                                      // The name of the constant "app" should be in upper case style
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
const path = require('path');                               // The name of the constant "path" should be in upper case style
const publicdir = path.join(__dirname, './public');         // The name of the constant "publicdir" should be in upper case style
app.use(express.static(publicdir));

app.listen(7123, () => {
    console.log();
})

module.exports = app;
