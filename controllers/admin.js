var Movie = require('../models/movie');
var _ = require('underscore');
exports.index = function(req, res){
  res.render('admin',{
     title: 'movie 后台录入页',
     movie: {
          doctor: '',
          country: '',
          title: '',
          year: '',
          poster: '',
          language: '',
          flash: '',
          summary: ''
     }
  })
}
exports.new = function(req, res){
	var id = req.body.movie._id;
	var movieObj = req.body.movie;
	var _movie;
	if(id !== 'undefined'){	
		Movie.findById(id, function(err,movie){
			if(err) console.log(err)
			_movie = _.extend(movie, movieObj)
		  _movie.save(function(err, movie){
		  	if(err) console.log(err)
		  	res.redirect('/admin/movie/list')
		  })
		})
	}else{
		_movie = new Movie({
			title: movieObj.title,
			doctor: movieObj.doctor,
			country: movieObj.country,
			year: movieObj.year,
			poster: movieObj.poster,
			language: movieObj.language,
			summary: movieObj.summary,
			flash: movieObj.flash
		})
		_movie.save(function(err, movie){
			if(err) console.log(err);
			res.redirect('/admin/movie/list')
		}) 
	}
}
exports.list = function(req, res){
  Movie.fetch(function(err, movies){
    res.render('list',{
       title: ' movie 列表页',
       movies: movies
  	})
  })
}
exports.update = function(req,res,next){
	var id = req.params.id;
	Movie.findById(id, function(err, movie){
		res.render('admin',{
		  title: 'movie后台修改页',
      movie: movie
		})
	})
}
exports.delete = function(req, res){
	var id = req.query.id;
	console.log(id)
	Movie.remove({_id: id}, function(err, movie){
		if(err) {
			console.log(err)
		}else{
			res.json({ status: 1})
		}
	})
}