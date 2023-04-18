const MYSQL = require('mysql2');
const DOTENV = require('dotenv');
DOTENV.config({ path: './.env'});
var constants = require('./constants');

const DB = MYSQL.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

DB.connect(function(error){
	if(error) {
		console.log(error);
	}
	else {
		console.log(constants.DB_CONNECTED);
	}
});

module.exports = DB;
