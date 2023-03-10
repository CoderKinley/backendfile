const express = require("express");
const app = express();
const {products} = require("./data");

app.get("/", (req,res)=>{
    res.send("<h1>Home Page</h1><a href='/api/products'>Products</a>");
});
// thisis it
// this is to get all the product directly
app.get("/api/products",(req,res)=>{
     const newProducts = products.map(product =>{
        const {id,name,image} = product;
        return {id,name,image};
     });
     res.json(newProducts);
});

// to get a single product
// app.get("/api/products/1",(req,res)=>{
//     const singleProduct = products.find(product=>product.id ===1);
//     res.json(singleProduct);
// });

// this code is using the route holder that is /:
app.get("/api/products/:productID", (req, res)=>{
    console.log(req.params);
    const {productID} = req.params;
    const requireProduct = products.find(val => val.id === Number(productID));
    if(!requireProduct){
        res.status(404).send("End Of The Page serach...");
    }
    res.json(requireProduct);
});

app.listen(5000, ()=>{
    console.log("conntected...port 5000");
});

console.log("hello world");