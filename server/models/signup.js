var mongoose = require('mongoose');

var signupSchema = new mongoose.Schema({
        First_Name: String,
        Last_Name: String,
        Current_Email_ID: String,
        Create_Username: String,
        Create_Password :String,
        Sity:String,
        State:String,
        ZipCode: String
});

module.exports = mongoose.model('signup', signupSchema);