var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio Website: HOME' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Portfolio Website: ABOUT' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Portfolio Website: CONTACT' });
});

module.exports = router;
