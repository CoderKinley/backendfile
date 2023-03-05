const http = require("http");

const server = http.createServer(function(req,res){
    res.write("hello world, welcome to our home page");
    console.log("connected to the server");
    console.log(req);
    if(req.url === "/"){
        res.write("Welcome to Home page");
        res.end();
    }
    else if(req.url ==="/about"){
        res.write("welcome to the About page");
        res.end();
    }
    else{
        res.write("404 error! Oop nothing found");
        res.end();
        // i have pushed it hard
    }
});

server.listen(8080);

