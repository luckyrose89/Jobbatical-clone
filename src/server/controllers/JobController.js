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

	// Use the following to create and/or update
	findOneAndUpdate: function(key, params, callback){
		// following lines to format keyword into [a,b,c,...] from [[a,b,c]]
		try {
	 		var keywords = params['category.keyword']
			var keyword = keywords.split(',')
			var newKeywords = []
			keyword.forEach(function(thiskeyword){
				newKeywords.push(thiskeyword.trim())
			})
			params['category.keyword'] = newKeywords
		} catch(err) {
		}
		// upsert to create if key not found. new:true to return updated job
		Job.findOneAndUpdate({"name":key} , (params), { upsert: true, new: true }, function(err, job){
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