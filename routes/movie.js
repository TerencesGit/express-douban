var express = require('express');
var router = express.Router();
var Movie = require('../controllers/movie')
var User = require('../controllers/user')

//index router
router.get('/', Movie.index)

//movie router
router.get('/movie/detail/:id', Movie.detail)
router.get('/movie/entry', User.signinRequired, Movie.entry)
router.post('/movie/new', Movie.new)
router.get('/movie/list', User.signinRequired, Movie.list)
router.get('/movie/update/:id', Movie.update)
router.delete('/movie/list', Movie.delete)	

// users router
router.get('/signup', User.showSignup)
router.get('/signin', User.showSignin)
router.get('/user/signup', User.findByName)
router.post('/user/signup', User.signup)
router.post('/user/signin', User.signin)
router.get('/logout', User.logout)
router.get('/user/list', User.list)
router.post('/user/set', User.adminRequired, User.set)
router.delete('/user/list', User.delete)
module.exports = router;
