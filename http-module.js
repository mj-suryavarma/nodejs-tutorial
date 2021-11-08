const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        // res.write("Hi welcome to Our Home Page");
         res.write("Hi welcome to Our Home Page");
         res.end();
    }else if(req.url==='/about'){
        res.write("This is our short history");
        res.end();
    }
else{
   res.write(`
   <h1>Oops!</h1>
   <p>we cann't find the page you are looking for</p>
   <a href="/">home page</a>
   `)

   res.end()
}
});
server.listen(5000);

