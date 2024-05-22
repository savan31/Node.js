const http = require('http'); //will call http module

const server = http.createServer((req,res)=>{
    console.log(req.url,req.headers, req.method); //When client send req on our server, It will give some data which client can't see so you can provide them like this
    res.setHeader('Content-Type','text/html');
    res.write('<html><head><title>Welcome to the website</title></head><body>hey Welcome</body></html>') //Showing manual data on website
    res.end();
}) //to create server

server.listen(7000); //basically your server will listen on port 7000