var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
  id: { type: String },
  inquiry: {
    type: String
  },
  email: {
    type: String,
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  }
});

// Parameters are: model name, schema, 'collection name'
module.exports = mongoose.model('contact', contactSchema);

module.exports.contactSchema = contactSchema;