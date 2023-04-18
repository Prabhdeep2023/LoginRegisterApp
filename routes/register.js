var express = require('express');
var router = express.Router();
var db = require('../database');
var constants = require('../constants');

/* this method loads the registration page */
router.get("/", (request, response) => {
    response.render("register");
})

/* this method is called to register a user */
router.post("/auth", (request, response) => {
    const { name, email, password, password_confirm } = request.body;

    if(name.trim().length == 0 || email.trim().length == 0 || password.length == 0 || password_confirm.length == 0) {
        return response.render('register', { message: constants.FIELDS_REQUIRED })
    }
    else if(password !== password_confirm) {
        return response.render('register', { message: constants.PASSWD_MISMATCH })
    }
    else {
        db.query('SELECT email FROM users WHERE email = ?', [email], async (error, result) => {
            if(error){
                console.log(error)
            }
            if( result.length > 0 ) {
                return response.render('register', { message: constants.EMAIL_OCCUPIED })
            }
    
            db.query('INSERT INTO users SET ?', {name: name, email: email, password: password}, (error, results) => {
                if(error) {
                    console.log(error)
                }
                else {
                    return response.render('register', { message: constants.USER_REGISTERED })
                }
            })
        })
    }
})

module.exports = router;