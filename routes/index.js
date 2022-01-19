var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cool', function(req, res, next) {
  res.render('index', { title: 'You are so cool' });
});

module.exports = router;
