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
			//social media ID
			type: String
		},
		loginMethod: { 
			//facebook, google, local
			type: String
		},
		displayName: { 
			type: String
		},
		email: { 
			//maybe a way to hash before storing into db
			type: String
		},
		applied: [{
	      job: {
	        type: mongoose.Schema.Types.ObjectId
	      }
	    }]
	}

});

module.exports = mongoose.model('User', UserSchema);
