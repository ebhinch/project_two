var express = require('express');
var router = express.Router();


router.get('/neighborhood', function(request, response) {
  response.render("I work.");
});


router.get("/neighborhood", (request, response) => {
  response.render
})

module.exports = router;
