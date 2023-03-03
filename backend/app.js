const http = require("http");

http.createServer(function(req,res){
    res.writeHead(200,{'connect-Type':"text/html"});
    res.write("hello world");
    res.end();
}).listen(8080);

