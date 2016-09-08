var express = require('express');
var router = express.Router();
var Movie = require('../models/movie')
var admin = require('../controllers/admin')
router.get('/', admin.index)
router.post('/movie/new', admin.new)
router.get('/movie/list', admin.list)
router.get('/movie/update/:id', admin.update)
router.delete('/movie', admin.delete)	
module.exports = router;