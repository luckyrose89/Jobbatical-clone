var mongoose = require('mongoose');


var categorySchema = new mongoose.Schema({
  _id: { type: String },
  region: {
  	// North America, Southeast Asia, Africa, Eourpe, etc
    type: String,
    ref: 'Category'
  },
  keyword: [{
  	// designer, engineer, web, data, creativity, wordpress, etc
    type: String,
    ref: 'Category'
  }]
});

// Parameters are: model name, schema, 'collection name'
module.exports = mongoose.model('category', categorySchema);

