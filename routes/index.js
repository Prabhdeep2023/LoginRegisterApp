var express = require('express');
var router = express.Router();

var db = require('../database');

router.get("/", (req, res) => {                           // Add the description to the method
  var sessionvar = req.session;
  if (sessionvar.user_id)
      res.render("dashboard", { session: req.session });
  else
      res.render("index",  { session: req.session });
});

module.exports = router;
