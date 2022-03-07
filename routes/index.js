var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Orion', componente: "search" });
});

router.get('/comic/:id', function(req, res, next) {
  res.render('index', { title: 'Orion', componente : "comics" });
});

router.get('/character/:id', function(req, res, next) {
  res.render('index', { title: 'Orion', componente : "character" });
});

module.exports = router;
