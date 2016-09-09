var User = require('../models/user')
var session = require('express-session');
exports.showSignup = function(req, res){
	res.render('signup',{
		title: '用户注册'
	})
}
exports.showSignin = function(req, res){
	res.render('signin',{
		title: '用户登录'
	})
}
exports.signup = function(req, res){
	var _user = req.body.user;
	User.findOne({name: _user.name}, function(err, user){
		if(err) console.log(err)
		if(!user){
			var user = new User(_user);
			user.save(function(err, user){
				if(err) console.log(err)
				res.render('signin',{
					title: '注册成功，请登录'
				})
			})
		}
	})
}
exports.signin = function(req, res){
	var name = req.body.user.name;
	var passwd = req.body.user.password;
	User.findOne({name: name},function(err, user){
		if(err) console.log(err)
			if(!user){
				console.log('用户名不存在')
				return res.redirect('/signup')
			}
			user.comparePassword(passwd, function(err, isMatch){
				if(err) console.log(err)
				if(isMatch){
					req.session.user = user;
					console.log('登录成功！')
					res.redirect('/')
				}else{
					console.log('密码错误')
					res.redirect('/signup')
				}
			})
	})
}
exports.logout = function(req, res){
	delete req.session.user;
	res.redirect('/')
}
exports.list = function(req, res){
	User.fetch(function(err, users){
		res.render('userlist', {
			title: '用户列表',
			users: users
		})
	})
}