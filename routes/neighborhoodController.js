var express = require('express');
var router = express.Router();


router.get('/neighborhood', function(request, response) {
  response.render("I work.");
});

module.exports = router;
