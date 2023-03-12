const express = require("express");
const {people} = require("./data");
const app = express();

//load my html file here
app.use(express.static('./methods-public'));

app.get("/api/people",(req,res) =>{
    res.status(200).json({success:true, status_code:200});
});

app.post("/api/people",(req,res)=>{
    res.status(201).send("success");
})

app.listen(5000,()=>console.log("connected to local host 5000...."));
