const express = require('express');
const router = express.Router();
const data = require('./../public/json/data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(data);
});

module.exports = router;
