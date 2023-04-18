var express = require('express');
var router = express.Router();

var db = require('../database');

/* this method loads the index page if user is not logged in 
   or the dashboard page if the user is logged in */
router.get("/", (request, response) => {
  var sessionvar = request.session;
  if (sessionvar.user_id)
    response.render("dashboard", { session: request.session });
  else
    response.render("index",  { session: request.session });
});

module.exports = router;