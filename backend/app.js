const http = require("http");

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
    }
    else{
        res.write("404 page not found");
        res.end();
    }
});

server.listen(8080);
