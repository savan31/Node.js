const http = require('http'); //will call http module

const server = http.createServer((req,res)=>{
    console.log(req);
}) //to create server

server.listen(7000); //basically your server will listen on port 7000