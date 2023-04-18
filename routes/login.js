var express = require('express');
var router = express.Router();
var db = require('../database');
var constants = require('../constants');

/* this method loads the login page */
router.get("/", (request, response) => {
    response.render("login");
})

/* this method is called to authenticate a user
   and load the dashboard after successful login */
router.post('/auth', function(request, response) {
    const { email, password } = request.body;
  
    if (email && password)
    {
      query = `Select * from users where email = "${email}"`;
      db.query(query, async (error, data) => {
        if(error){
            console.log(error);
        }
        if (data.length > 0)
        {
            if(password == data[0].password)
            {
                request.session.user_id = data[0].id;
                request.session.name = data[0].name;
                response.render("dashboard", { session: request.session });
            }
            else
            {
                return response.render('login', { errormessage: constants.WRONG_PASSWD })
            }
        }
        else
        {
            return response.render('login', { errormessage: constants.WRONG_EMAIL })
        }
      });
    }
    else
    {
        return response.render('login', { errormessage: constants.ENTER_EMAIL_PASSWD })
    }
  });

module.exports = router;
