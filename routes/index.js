var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({message: 'welcome to Express-SQLite api portal'});
});

module.exports = router;
