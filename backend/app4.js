const http = require("http");
const {readFileSync}= require('fs');

const homePage = readFileSync("./index.html");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":"text/html"});
    res.write("Welcom Home");
    // res.end();
    const requ = req.url;
    if(requ === "/"){
        res.writeHead(200,{"contex-type":"text/html"});
        res.write(homePage);
        res.end();
    }
    else if(requ === "/about"){
        res.writeHead(200,{"contex-type":"text/html"});
        res.write("Hello about page");
        res.end();
    }
    else{
        res.writeHead(404,{"contex-type":"text/html"});
        res.write("404 not found");
        res.end();
    } 
});

server.listen(3000,()=>{
    console.log("connected to the server!!"); 
});