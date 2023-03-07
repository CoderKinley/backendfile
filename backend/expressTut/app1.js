const express = require('express');
const app = express(); //providing the path
const path = require("path");

// set up static and middle ware
// static => file that server doesnot have to change it
app.use(express.static('./navBarApp'));
//adding to the static
// server side rendering
 
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./navBarApp/index.html"));
});

app.all("*",(req,res)=>{
    res.status(404).send("<h1>Page Not Found!!</h1>")
});

app.listen(5000, ()=>{
    console.log("connected to the server 5000...");
});

//api and server side rendering and p.post
// app.put 
// app.delete
// app.all -> if we cannot find the resouce we use this
// app.listen -> listening on certain
// app.use -> this is a middle ware