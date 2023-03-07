const http = require("http");
const {readFileSync} = require('fs');

// home page 
const homePage = readFileSync('./navBarApp/index.html');

const server = http.createServer((req,res)=>{
    // url
    const reqUrl = req.url;
    console.log(reqUrl);
    // looping through the url
    if(reqUrl === "./"){
        res.writeHead(200, {"content-type":"text/html"});
        res.write(homePage);
        res.end();
    }
    else if(reqUrl === "./about"){
        res.writeHead(200, {"content-type":"text/html"})
        res.end("about page");
    }
    else{
        res.end("404 erro");
    }

});
server.listen(4000,()=>{
    console.log("connected to the local host!");
});