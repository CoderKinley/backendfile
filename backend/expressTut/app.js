const http = require("http");
const {readFileSync} = require('fs');

// home page 
const homePage = readFileSync('./navBarApp/index.html');


const server = http.createServer((req,res)=>{
    res.write("hello");
    res.end();
});
server.listen(3000,()=>{
    console.log("connected to the local host");
});