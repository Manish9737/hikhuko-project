var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<h1>That is for Hikhuko...!</h1>');
});

module.exports = router;
