const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config({ path: './.env'});

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

db.connect(function(error){
	if(error) {
		console.log(error);
	}
	else {
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = db;
