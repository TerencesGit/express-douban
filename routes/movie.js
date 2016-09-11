var express = require('express');
var router = express.Router();
var Movie = require('../controllers/movie')
var User = require('../controllers/user')
var Comment = require('../controllers/comment')

//index router
router.get('/', Movie.index)

//movie router
router.get('/movie/detail/:id', Movie.detail)
router.get('/movie/entry', Movie.entry)
router.post('/movie/new', Movie.new)
router.get('/movie/list', Movie.list)
router.get('/movie/update/:id', Movie.update)
router.delete('/movie/list', Movie.delete)	

// users router
router.get('/signup', User.showSignup)
router.get('/signin', User.showSignin)
router.get('/user/signup', User.findByName)
router.post('/user/signup', User.signup)
router.post('/user/signin', User.signin)
router.post('/signin', User.signInModal)
router.get('/logout', User.logout)
router.get('/user/list', User.list)
router.post('/user/set', User.adminRequired, User.set)
router.delete('/user/list', User.delete)

 //comment
 router.post('/user/comment', User.signinRequired, Comment.save)
module.exports = router;
