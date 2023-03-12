const express = require("express");
const {people} = require("./data");
const app = express();

// below code that i use are all basically the middle ware
//load my html file here
app.use(express.static('./methods-public'));

//parse form the data
app.use(express.urlencoded({extended:false}));

// parse json
app.use(express.json());

app.get("/api/people",(req,res) =>{
    res.status(200).json({success:true, data:people});
});

app.post("/api/people",(req,res)=>{
    const {name} = req.body;
    if(!name)res.status(400).json({success:false,msg:'please fill'});

    res.status(201).send({success:true, person:name});
});

app.post("/login",(req,res)=>{
    const {name} = req.body;
    res.send(`successfully login, welcome ${name}`);
})

app.listen(5000,()=>console.log("connected to local host 5000...."));
