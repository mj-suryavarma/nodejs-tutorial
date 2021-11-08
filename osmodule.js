const os = require('os');

// info about the current users
const user = os.userInfo();
console.log(user);


//methods return system uptime 
console.log(`the system uptime is ${os.uptime()} seconds`);

//current system info
const currentOs = {
   name : os.type(),
   release : os.release(),
   totalmem : os.totalmem(),
   freemem : os.freemem(),
   version : os.version(),
   hostName : os.hostname(),
   homedir : os.homedir(),

   
}

console.log(currentOs);

