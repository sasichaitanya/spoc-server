var mongoose = require('mongoose');

var connection = mongoose.connect('mongodb://localhost/angular5db');
var db = mongoose.connection;

db.on('error', function (err) {
    console.log("ERROR CONNECTING TO DATABASE", err);
})

db.once('open', function callback() {
    console.log('CONNECTED TO MONGODB');
});

var UserSchema = mongoose.Schema({
    fname: String,
    lname: String,
    gender: String,
    dateOfBirth: String,
    email: String,
    userName: String,
    password: String,
    country: String
})

var userModel = mongoose.model('usersCollection', UserSchema);

module.exports = {
    userModel: userModel
}