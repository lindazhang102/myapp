var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hello,linda!there is express respond! themes pages');
  // res.render('/', { title: 'Linda' ,theme:'express'});
});

module.exports = router;