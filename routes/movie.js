var express = require('express');
var router = express.Router();
var Movie = require('../controllers/movie')
var Admin = require('../controllers/admin')
var User = require('../controllers/user')

//movie router
router.get('/', Movie.index)
router.get('/detail/:id', Movie.detail)

// users router
router.get('/signup', User.showSignup)
router.get('/signin', User.showSignin)
router.post('/user/signup', User.signup)
router.post('/user/signin', User.signin)
router.get('/user/list', User.list)
router.get('/logout', User.logout)

//admin router
router.get('/admin', Admin.index)
router.post('/admin/movie/new', Admin.new)
router.get('/admin/movie/list', Admin.list)
router.get('/admin/movie/update/:id', Admin.update)
router.delete('/admin/movie', Admin.delete)	
module.exports = router;
