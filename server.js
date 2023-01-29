const http = require('http');

const port = 8081;  // local port number

http.createServer((request,response) => { // callback function 
    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.write("<h1> Hello , this from my server </h1>");
    response.end();
})
.listen(port,()=> { // call back function
    console.log(`Node.js server started on port ${port}`);
});
// http://localhost:8081S