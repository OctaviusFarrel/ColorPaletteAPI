const express = require('express');
const router = express.Router();

/* Get Photo Page. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  res.send("Nice");
});

module.exports = router;
