const express = require('express');
const router = express.Router();

/* Get HELP Page. */
router.get('/', function(req, res, next) {
  res.render('help');
});

module.exports = router;
