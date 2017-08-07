var Category = require('./Category');
var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema({
	job: {
		name: { type: String, required: true },
	    // Pictures must start with "http://"
	    pictures: [{ type: String, match: /^http:\/\//i }],
	    description: { type: String, required: true },
	    // category: { type: String, required: true }
	    category: Category.categorySchema
	}
  });

module.exports = mongoose.model('JobSchema', JobSchema);
// module.exports.index({ name: 'text' });

// module.exports.set('toObject', { virtuals: true });
// module.exports.set('toJSON', { virtuals: true });