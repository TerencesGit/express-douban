var express = require('express');
var router = express.Router();
var User = require('../controllers/user')
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/signup', User.showSignup)
router.get('/signin', User.showSignin)
router.post('/user/signup', User.signup)
router.post('/user/signin', User.signin)
router.get('/user/list', User.list)
module.exports = router;
