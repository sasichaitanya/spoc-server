var express = require('express');

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' });

var fs=require('fs');


var openRouter = express.Router();

// custom
var functionality = require('../modules/modules');

openRouter.post('/register', function (req, res) {
    functionality.register(req.body, function (result) {
        res.json(result);
    });
});

openRouter.post('/loginVerify', function (req, res) {
    functionality.loginVerify(req.body, function (result) {
        res.json(result);
    })
})

openRouter.get('/getAllUsers',function(req,res){
    functionality.getAllUsers(function(result){
        res.json(result);
    })
})

openRouter.get('/getAllUsers/:email/:password',function(req,res){
    console.log("details=====>",req.params);
    functionality.getSelectedUser(req.params,function(result){
        res.json(result);
    })
})

openRouter.post('/uploadSingle',upload.single('sashi'),function(req,res){
    console.log("i am here ============")
    functionality.uploadSingle(req,function(result){
        res.json(result);
    })
})

openRouter.get('/ravi', function (req, res) {
    fs.ReadStream('./uploads/a8647a54764114684d6728309bdc0483',function(err, data){
        if (err){
           console.log(err); 
        }
        console.log(data.ReadStream);
        res.end(data);
      });
    

    });
module.exports = {
    openRouter: openRouter
}

