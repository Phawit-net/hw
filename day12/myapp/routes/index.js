var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',test:'xxx',myname:'Phawit Rojanakijpanich',age:'25'});
});

module.exports = router;
