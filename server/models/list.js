var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/routecourse')
.then(()=>console.log('connection succsess')).catch((err)=>console.error(err));

var dataSchema = new mongoose.Schema({
        Course_Name: String,
        Module_ID: Number,
        Description: String,
        Topic: String,
        SubTopic: Array,
        Picture:String,
        Seats:Number,
        Cost: Number,
        Prerequisites: Array,
        StudentId:Array
});


module.exports = mongoose.model('Course', dataSchema);
