var express = require('express');
var router = express.Router();
var db = require('../database');

router.get("/", (req, res) => {
    res.render("login");
})

router.post('/auth', function(request, response) {
    const { email, password } = request.body;
    
    /*add comments for both the methods*/
  
    if (email && password)
    {
      query = `Select * from users where email = "${email}"`;
      db.query(query, async (error, data) => {
        if (data.length > 0)
        {
            let passwordOriginal = data[0].password;
            /*unnecessary declaration of the variable – passwordOriginal*/
            if(password == passwordOriginal)
            {
                request.session.user_id = data[0].id;
                request.session.name = data[0].name;
                response.render("dashboard", { session: request.session });
            }
            else
            {
                return response.render('login', { errormessage: 'Incorrect password!' })
            }
        }
        else
        {
            return response.render('login', { errormessage: 'Incorrect email address!' })
        }
      });
    }
    else
    {
        return response.render('login', { errormessage: 'Please enter email address and password.' })
    }
    /*use constants in place of the hardcoded message strings*/
  });

module.exports = router;
