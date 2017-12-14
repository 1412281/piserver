var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', function(req, res, next) {
    indexController();
  res.render('index', { title: 'Control LED light' });
});

module.exports = router;
