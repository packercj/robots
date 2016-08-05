var express = require('express');
var router = express.Router();

//get about page
router.get('/', function(request, response, next){
  response.render('about', { title: 'index'});
});

module.exports = router;
