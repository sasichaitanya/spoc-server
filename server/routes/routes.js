var express = require('express');
var multer  = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '.jpg') //Appending .jpg
    }
  })
var upload = multer({ storage: storage });
  
// custom
var User = require('../modules/modules');

var openRouter = express.Router();

openRouter.post('/profile', upload.single('MyFile'), function (req, res) {
   
    console.log('File is ==>', req.file);
    console.log('Body is ==>', req.body);

    User.SaveProducts(req,function(result){
        res.json(result);
    })
})

openRouter.get('/getimage',function(req,res){
    res.sendFile(__dirname+"/uploads/1527064786601.jpg");
})


openRouter.post('/register', function (req, res) {
    User.Register(req.body, function (result) {
        res.json(result);
    });
});

openRouter.post('/loginVerify',function(req,res){
    User.LoginVerify(req.body,function(result){
        res.json(result);
    })
})

// openRouter.post('/loginVerify', function (req, res) {
//     User.loginVerify(req.body, function (result) {
//         res.json(result);
//     })
// })

// openRouter.get('/getAllUsers',function(req,res){
//     User.getAllUsers(function(result){
//         res.json(result);
//     })
// })

// openRouter.get('/getAllUsers/:email/:password',function(req,res){
//     console.log("details=====>",req.params);
//     User.getSelectedUser(req.params,function(result){
//         res.json(result);
//     })
// })

// openRouter.post('/uploadSingle',upload.single('sashi'),function(req,res){
//     console.log("i am here ============")
//     User.uploadSingle(req,function(result){
//         res.json(result);
//     })
// })

// openRouter.get('/ravi', function (req, res) {
//     fs.ReadStream('./uploads/a8647a54764114684d6728309bdc0483',function(err, data){
//         if (err){
//            console.log(err); 
//         }
//         console.log(data.ReadStream);
//         res.end(data);
//       });
    

//     });
module.exports = {
    openRouter: openRouter
}

