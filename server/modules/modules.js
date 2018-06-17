var mongoose = require('mongoose');



// custom
var CubesModel = require('../models/schema');
var config = require('../config/config');
var helpers = require('../helpers/helpers');

var Cube = function () {
}

Cube.prototype.SaveCubeData = function (cred, callback) {
    var retObj = {};
    var imagesArr=[];
    for(var i=0;i<cred.files.length;i++){
        imagesArr.unshift(cred.files[i].filename);
    }
    console.log("==============",imagesArr)
    var cube = new CubesModel.CubesModel({
        name: cred.body.cubeName,
        images:imagesArr
    })
    cube.save(function (err) {
        if (err) {
            retObj.status = false;
            retObj.message = "Error while saving the credentials";
            retObj.error = err;
            callback(retObj);
        } else {
            retObj.status = true;
            retObj.message = "Your details successfully saved in database";
            callback(retObj);
        }
    })
}

Cube.prototype.getCubeDetails = function (callback) {
    var retObj = {};
    CubesModel.CubesModel.find(function (err, docs) {
        if (err) {
            retObj.status = false;
            retObj.message = "Error while getting user details";
            callback(retObj);
        } else {
            retObj.status = true;
            retObj.message = "Successfully got the user details";
            retObj.data = docs;
            callback(retObj);
        }
    })
}


module.exports = new Cube();