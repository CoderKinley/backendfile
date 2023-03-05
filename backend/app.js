const http = require("http");

<<<<<<< HEAD
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
=======
let server = http.createServer(function(req,res){
    res.writeHead(200,{'connect-Type':"text/html"});
    res.write("hello world");
    if(req.url === "/"){
        res.write("This is the home page");
        res.end();
    }
    else if(req.url === "/about"){
        res.write("this is the the about page");
        res.end();
>>>>>>> 622758d5b07d4023d477a7942d256c8329dbb5b4

    }
    else{
        res.write("404 page not found");
        res.end();
    }
});

server.listen(8080);
