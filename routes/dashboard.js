var express = require('express');
var router = express.Router();

router.get("/", function(rq, rs, next){
  rq.session.destroy();
  rs.redirect("/");
  });

module.exports = router;