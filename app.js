const EXPRESS = require('express');
var cookieParser = require('cookie-parser');
var sessions = require('express-session');
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var dashboardRouter = require('./routes/dashboard');

const App = EXPRESS();
App.use(EXPRESS.urlencoded({extended: false}));
App.use(EXPRESS.json());
App.use(sessions({
    secret : 'loginapp',
    resave : true,
    saveUninitialized : true
  }))
App.use(cookieParser());

App.use('/', indexRouter);
App.use('/login', loginRouter);
App.use('/register', registerRouter);
App.use('/logout', dashboardRouter);

App.set('view engine', 'hbs');
const PATH = require('path');
const PUBLICDIR = PATH.join(__dirname, './public');
App.use(EXPRESS.static(PUBLICDIR));

App.listen(7123, () => {
    console.log();
})

module.exports = App;