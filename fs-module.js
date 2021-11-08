const {readFileSync , writeFileSync, readFile} = require('fs');
console.log("start");

const firstfile = readFileSync("./content/first.txt","utf8");
const secondfile = readFileSync("./content/second.txt","utf8");


writeFileSync("./content/fs-result-sync.txt",`Here is the result:  ${firstfile} and ${secondfile}`,
  {flag:'a'});
  console.log("done with the dask");

  console.log("starting with the new dask")


