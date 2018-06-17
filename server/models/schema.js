var mongoose = require('mongoose');

var connection = mongoose.connect('mongodb://localhost/sunilpocDB');
var db = mongoose.connection;

db.on('error', function (err) {
    console.log("ERROR CONNECTING TO DATABASE", err);
})

db.once('open', function callback() {
    console.log('CONNECTED TO MONGODB');
});

var CubeSchema = mongoose.Schema({
    name:String,
    images:Array
});


var CubesModel = mongoose.model('CubesCollection', CubeSchema);

module.exports = {
    CubesModel: CubesModel,
}