var Contact = require('../models/Contact');

module.exports = {

	find: function(params, callback){
		Contact.find(params, function(err, contact){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, contact)
		})
	},

	findById: function(id, callback){
		Contact.findById(id, function(err, contact){
			if(err){
				callback(err, null)
				return
			}
			callback(null, contact)
		})
	},

	findOneAndUpdate: function(queries, params, callback){
	    const options = {
	      new: true,
	      upsert: true,
	      runValidators: true,
	      setDefaultsOnInsert: true,
	    };

		Contact.findOneAndUpdate({'email':queries}, params, options, function(err, contact){
			console.log('the query is',queries)
			console.log('the params is', params)
			if (err){
				callback(err, null)
				return
			}
			callback(null, contact)
		})
	},

	update: function(id, params, callback){
		Contact.findByIdAndUpdate(id, params, {new:true}, function(err, contact){
			if (err){
				callback(err, null)
				return
			}
			callback(null, contact)
		})
	},

	destroy: function(id, callback){
		Contact.findByIdAndRemove(id, function(err){
			if (err){
				callback(err, null)
				return 
			}

			callback(null,null)
		})
	}
}