const http = require("http");

const server = http.createServer((req,res)=>{
    // res.end("Thank You for coming here!");
    if(req.url === "/"){
        res.write("Home Page");
    }
    else if(req.url === "/about"){
        res.write("About Page");
    }
    else{
        res.write("Page not found");
    }
});

server.listen(8080,()=>{
    console.log("Connected to port 8080...");
});