var mongoose = require('mongoose');

var addcourseSchema = new mongoose.Schema({
    Course_Name: String,
    Module_ID: Number,
    Description: String,
    Topic: String,
    SubTopic: Array,
    Picture:String,
    Seats:Number,
    Cost: Number,
    Prerequisites: Array
});

module.exports = mongoose.model('addcourse', addcourseSchema);