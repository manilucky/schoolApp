var mongoose = require('mongoose');
var courseSchema = new mongoose.Schema({
  Module: Number,
  Topic:String,
  Subtopic: String
});
module.exports = mongoose.model('course', courseSchema);