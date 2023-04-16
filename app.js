const EXPRESS = require('express');
var cookieParser = require('cookie-parser');
var sessions = require('express-session');
var indexRouter = require('./rouexpresstes/index');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var dashboardRouter = require('./routes/dashboard');

const APP = EXPRESS();
APP.use(EXPRESS.urlencoded({extended: false}));
APP.use(EXPRESS.json());
APP.use(sessions({
    secret : 'loginapp',
    resave : true,
    saveUninitialized : true
  }))
APP.use(cookieParser());

APP.use('/', indexRouter);
APP.use('/login', loginRouter);
APP.use('/register', registerRouter);
APP.use('/logout', dashboardRouter);

APP.set('view engine', 'hbs');
const PATH = require('path');
const PUBLICDIR = PATH.join(__dirname, './public');
APP.use(EXPRESS.static(PUBLICDIR));

APP.listen(7123, () => {
    console.log();
})

module.exports = APP;
