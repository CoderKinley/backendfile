const express = require("express");
const {people} = require("./data");
const app = express();

app.get("/api/people",(req,res) =>{
    res.status(200).json(people);
});

app.listen(5000,()=>console.log("connected to local host 5000...."));
