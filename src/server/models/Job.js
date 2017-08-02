var Category = require('./Category');
var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema({
    name: { type: String, required: true },
    // Pictures must start with "http://"
    pictures: [{ type: String, match: /^http:\/\//i }],
    description: { type: String, required: true },
    category: Category.categorySchema
  });

module.exports = mongoose.model('JobSchema', JobSchema);
module.exports.index({ name: 'text' });

//Mongoose concept of "virtual" fields in schema
//https://stackoverflow.com/questions/26909509/mongoose-toobject-virtuals-true
module.exports.set('toObject', { virtuals: true });
module.exports.set('toJSON', { virtuals: true });