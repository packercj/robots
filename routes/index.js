var express = require('express');
var redis = require('redis');
var redisClient = redis.createClient();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  redisClient.smembers('robots', function(err, robots){
    res.locals.robots = robots ? robots : [];
    res.render('index', { title: 'C&J Robots' });
  });
});

//create robot
router.post('/', function(req, res) {
  redisClient.sadd('robots', req.body.name);
  res.redirect('/');
});

//delete robot
router.get('/delete/:name', function(req, res) {
  redisClient.srem('robots', req.params.name);
  res.redirect('/');
});

module.exports = router;
