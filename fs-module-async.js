const {readFile, writeFile} = require('fs');
  console.log("start");

                                     /// if you not use utf8 decoding you will get a encoding output
readFile("./content/first.txt","utf-8",(err , result) => {  
    if (err) {                                // an only way to access the result and error to callback function
      console.log("error is:",err);
    }
    console.log("first ",result);
    const first = result;
  })

  readFile('./content/first.txt', 'utf8', (err,result) =>{
     if(err){
       console.log(err);

     }
     console.log(result);
     const second = result;

     writeFile("./content/fs-result-async.txt",
     `Here is the result ${second}`,
     {flag :'a'},
     (err, result) =>{
       if(err){
         console.log(err);
       }
       console.log("done with the dask");
     })
  });

 console.log("starting the next one");

  
