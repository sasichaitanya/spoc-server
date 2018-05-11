
var mongoose = require('mongoose');


// custom
var user = require('../models/schema');

var fun = function () {
}

fun.prototype.register = function (cred, callback) {
    var retObj = {};
    var person = new user.userModel({
        fname: cred.fname,
        lname: cred.lname,
        gender: cred.gender,
        dateOfBirth: cred.dateOfBirth,
        email: cred.email,
        userName: cred.userName,
        password: cred.password,
        country: cred.country
    })
    person.save(function (err) {
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

fun.prototype.loginVerify = function (cred, callback) {
    var retObj = {};
    user.userModel.findOne({ email: cred.email }, function (err, userDetails) {
        if (err) {
            retObj.status = false;
            retObj.message = "Error while getting credentials";
            callback(retObj);
        } else if (userDetails && userDetails.password === cred.password) {
            retObj.status = true;
            retObj.message = "You are successfully logged in"
            callback(retObj);
        } else {
            retObj.status = false;
            retObj.message = "Invalid credentials";
            callback(retObj);
        }
    })
}

fun.prototype.getAllUsers = function (callback) {
    var retObj = {};
    user.userModel.find(function (err, docs) {
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

fun.prototype.getSelectedUser = function (cred, callback) {
    var retObj = {};
    user.userModel.findOne({ email: cred.email }, function (err, userDetails) {
        if (err) {
            retObj.status = false;
            retObj.message = "Error while getting credentials";
            callback(retObj);
        } else if (userDetails && userDetails.password === cred.password) {
            retObj.status = true;
            retObj.message = "Selected user details";
            retObj.data=userDetails;
            callback(retObj);
        } else {
            retObj.status = false;
            retObj.message = "Invalid credentials";
            callback(retObj);
        }
    })
}

fun.prototype.uploadSingle=function(req,callback){
    console.log("here in req . file is ====>",req.file);
    callback("record inserted");
}

module.exports = new fun();