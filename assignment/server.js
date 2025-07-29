const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    console.log(req);
    //res.send ("<h1> Hello World")
    res.json({
        name : "Sanyam",
        address:"MGG",
        isLogin:true
    })
})
//path param/variable!
//1. params
app.get("/users/:id",(req,res)=>{
    console.log(req.params.id);
    let id = req.params.id;
    res.send("id")
})
//2. query parameter;
app.get("/blogs",(req,res)=>{
    console.log(req.query.ttle);
    res.send("got it")
    
})
app.listen(2222,()=>{
    console.log("server started");

})
