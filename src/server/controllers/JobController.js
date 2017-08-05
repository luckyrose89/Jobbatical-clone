var Job = require('../models/Job');

module.exports = {

	find: function(params, callback){
		Job.find(params, function(err, job){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, job)
		})
	},

	findById: function(id, callback){
		Job.findById(id, function(err, job){
			if(err){
				callback(err, null)
				return
			}
			callback(null, job)
		})
	},

	create: function(params, callback){
		Job.create(params, function(err, job){
			if (err){
				callback(err, null)
				return
			}
			callback(null, job)
		})
	},

	update: function(id, params, callback){
		Job.findByIdAndUpdate(id, params, {new:true}, function(err, job){
			if (err){
				callback(err, null)
				return
			}
			callback(null, job)
		})
	},

	destroy: function(id, callback){
		Job.findByIdAndRemove(id, function(err){
			if (err){
				callback(err, null)
				return 
			}

			callback(null,null)
		})
	}
}