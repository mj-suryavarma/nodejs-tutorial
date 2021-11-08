var path = require('path')
const log = require('./logger');
log.log("this is my 2nd message!....") 

var pathObj = path.parse(__filename);
console.log(pathObj);
 console.log(`the current file path is ${__dirname}`)