// var md5 = require('md5');

var crypto = require('crypto');

function getmd5(input){
    return crypto.createHash('md5').update(input).digest('hex');
}

module.exports={
    getmd5
}
