var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
  title: String,
  author: String,
  content: String,
  photo: String,
  video: String,
  quote: String,
  created_at: { type: Date }
});

module.exports = mongoose.model('Post', PostSchema);