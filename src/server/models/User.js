var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	profile: {
		username: {
			type: String,
			required: true,
			unique: true,
			lowercase: true
		}, 
		picture: { //Facebook oauth will postback profile img
			type: String,
			match: /^http:\/\//i
			// required: true ->set to be not required
		}
	},
	data: {
		oauth: { 
			type: String
		},
		applied: [{
	      job: {
	        type: mongoose.Schema.Types.ObjectId
	      }
	    }]
	}

});

module.exports = mongoose.model('UserSchema', UserSchema);
