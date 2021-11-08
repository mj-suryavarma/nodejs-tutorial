 
var url = "http://newlogger/api/new";

   function log(message) {
     //send http request
    console.log(message);
   }

   module.exports.log = log;

//    module.exports.log =log;
//    exports.log =log;

//    exports =log; //cannot write this method 
//    /// because it's refrence as a exports.module