var express = require('express');
var router = express.Router();

/* this method loads the dashboard */
router.get("/", function(request, response){
  request.session.destroy();
  response.redirect("/");
  });

module.exports = router;