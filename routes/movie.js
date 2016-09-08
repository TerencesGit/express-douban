var express = require('express');
var router = express.Router();
var movie = require('../controllers/movie')
router.get('/', movie.index)
router.get('/movie/:id', movie.detail)
module.exports = router;
