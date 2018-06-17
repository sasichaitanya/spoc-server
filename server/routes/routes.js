var express = require('express');
var multer = require('multer');
const uuidv4 = require('uuid/v4');
const path = require('path');
 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'server/uploads/cubes')
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + path.extname(file.originalname)) //Appending .jpg
    }
})
var upload = multer({ storage: storage });

// custom
var CubeSave = require('../modules/modules');

var openRouter = express.Router();

openRouter.post('/cubes', upload.array('uploads[]', 12), function (req, res) {
    CubeSave.SaveCubeData(req,function(result){
        res.json(result);
    })
})

openRouter.get('/cubes', function (req, res){
    CubeSave.getCubeDetails(function(result){
        res.json(result);
    })
})

openRouter.get('/cubes/image/:imageName', function (req, res){
    res.sendFile(__dirname.replace('/routes','')+'/uploads/cubes/'+req.params.imageName);
})



module.exports = {
    openRouter: openRouter
}

