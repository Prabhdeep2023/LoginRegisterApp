var express = require('express');
var router = express.Router();

router.get("/", function(rq, rs, next){   // The name of the variables "rq" and "rs" should be meaningful 
  rq.session.destroy();                   // Add the description to the method
  rs.redirect("/");
  });

module.exports = router;
