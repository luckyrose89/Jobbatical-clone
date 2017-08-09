var Category = require('./Category');
var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema({
	job: {
		name: { type: String, required: true },
		datePosted: { type: Date, default: Date.now },
		hiringOrganization: {
			name: { type: String },
			location: {
	        	addressCity: { type: String },
	            addressRegion: { type: String },
	            addressCountry: { type: String }
        	}
		},
	    // Pictures must start with "http://"
	    pictures: [{ type: String, match: /^http:\/\//i }],
	    description: { type: String, required: true },
	    // category: { type: String, required: true }
	    category: Category.categorySchema,
	    incentiveCompensation: { type: String },
	    jobLocation: {
        	addressCity: { type: String },
            addressRegion: { type: String },
            addressCountry: { type: String }
        },
        employmentType: { type: String }, //part-time or full-times
        industry: { type: String },
        responsibilities: { type: String }, 
        qualifications: { type: String },
        validThrough: { type: String }
	}
  });

module.exports = mongoose.model('JobSchema', JobSchema);
// module.exports.index({ name: 'text' });

// module.exports.set('toObject', { virtuals: true });
// module.exports.set('toJSON', { virtuals: true });