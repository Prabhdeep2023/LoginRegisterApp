var express = require('express');
var router = express.Router();

router.get("/", function(rq, rs, next){   // The name of the variables "rq" and "rs" should be meaningful. Add the description to the method.
  rq.session.destroy();                 
  rs.redirect("/");
  });

module.exports = router;
