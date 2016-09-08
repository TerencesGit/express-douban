var mongoose = require('mongoose');
var movieSchema = new mongoose.Schema({
	title: String,
	doctor: String,
	country: String,
	year: Number,
	poster: String,
	language: String,
	flash: String,
	summary: String,
	meta: {
		createAt: {
			type: Date,
			defalut: Date.now()
		},
		updateAt: {
				type: Date,
				defalut: Date.now()
		}
	}
})
movieSchema.pre('save',function(next){
	var movie = this;
	if(this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now();
	}else{
		this.meta.updateAt = Date.now();
	}
	next()
})
movieSchema.statics = {
	fetch: function(cb){
		return this
					.find({})
					.sort('meta.updateAt')
					.exec(cb)
	},
	findById: function(id, cb){
		return this
					.findOne({_id: id})
					.exec(cb)
	}
}
module.exports = movieSchema;