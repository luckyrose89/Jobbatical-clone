var Category = require('../models/Category');

module.exports = {

	find: function(params, callback){
		Category.find(params, function(err, category){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, category)
		})
	},

	findById: function(id, callback){
		Category.findById(id, function(err, category){
			if(err){
				callback(err, null)
				return
			}
			callback(null, category)
		})
	},

	create: function(params, callback){
		Category.create(params, function(err, category){
			if (err){
				callback(err, null)
				return
			}
			callback(null, category)
		})
	},

	update: function(id, params, callback){
		Category.findByIdAndUpdate(id, params, {new:true}, function(err, category){
			if (err){
				callback(err, null)
				return
			}
			callback(null, category)
		})
	},

	destroy: function(id, callback){
		Category.findByIdAndRemove(id, function(err){
			if (err){
				callback(err, null)
				return 
			}

			callback(null,null)
		})
	}
}