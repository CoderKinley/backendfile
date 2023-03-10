const express = require("express");
const app = express();
const {products} = require("./data");
const logger = require("./logger");


// this will add the logger to all the routes.
app.use(logger);
// this can be used to apply to the path after the first argument
// app.use("/api", logger);
// to use multiple middleware function
// app.use([logger,method])
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
    console.log(req.query);
    const {productID} = req.params;
    const requireProduct = products.find(val => val.id === Number(productID));
    if(!requireProduct){
        res.status(404).send("End Of The Page serach...");
    }
    res.json(requireProduct);
});
//seeing the params function again
// /api/v1/name:username/id:userid

app.get("/api/v1/name/:username/id/:userid",(req,res)=>{
    console.log(req.params);
    res.send("hello from the other side");
});

// setting up the query or using the ? and alll
app.get("/api/v1/query", (req,res)=>{
    console.log(req.query);
    res.send("hello world");
});

app.get("/api/v1/kinley/query",(req,res)=>{
    const {search, limit} = req.query;
    sortedProducts = [...products];
    if(search){
        sortedProducts = sortedProducts.filter((product)=>product.name.startsWith(search));
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }
    //if ther is not product found
    if(sortedProducts.length <1){
        return res.status(200).json({success:true, data:[]});
    }
    res.status(200).json(sortedProducts);
});

// middle ware tutorial, the next is used inorder to either terminate, access the next middleware function or call the next itself to not ?
// not have problem in the browsing time.

app.get("/phurpa",logger, (req,res)=>{
    res.send("<h1>Phurpa</h1>");
});

app.get("/jigme",logger ,(req,res)=>{
    res.send("Jigme");
});

app.listen(5000, ()=>{
    console.log("conntected...port 5000");
});

// middle ware is every where in the express and it is heaer and soul of the express js
// req => middlewhere => response