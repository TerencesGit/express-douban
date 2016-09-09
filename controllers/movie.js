var Movie =  require('../models/movie');
exports.index = function(req, res){
	console.log(req.session.user)
	Movie.fetch(function(err, movies){
		res.render('movie',{
			title: '电影 首页',
	    movies: movies
		})
	})
}
exports.detail = function(req, res){
	var id = req.params.id;
	Movie.findById(id, function(err, movie){
		res.render('detail',{
		  title: 'movie 详情',
      movie: movie
		})
	})
}