const http = require("http");
const {readFileSync} = require('fs');

// home page 
const homePage = readFileSync('./navBarApp/index.html');
// having to import every single file one by one if we are usign the plain node
const homeLogic = readFileSync('./navBarApp/index.js');
const homeStyles = readFileSync('./navBarApp/style.css');

const server = http.createServer((req,res)=>{
    // Ignore requests for favicon.ico
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        res.end();
        return;
    }

    // url
    const reqUrl = req.url;
    // looping through the url
    if(reqUrl === "/"){
        res.writeHead(200, {"content-type":"text/html"});
        res.write(homePage);
        res.end();
    }
    else if(reqUrl === "/about"){
        res.writeHead(200, {"content-type":"text/html"})
        res.end("about page");
    }
    else if(reqUrl === "/style.css"){
        res.writeHead(200, {"content-type":"text/css"})
        res.end(homeStyles);
    }
    else if(reqUrl === "/index.js"){
        res.writeHead(200, {"content-type":"text/javascript"});
        res.end(homeLogic);
    }

    else{
        res.writeHead(404, {"content-type":"text/html"});
        res.end("404 erro");
    }

});

server.listen(4000,()=>{
    console.log("connected to the local host!");
});
