import express from "express"
// const express = require("express")
const app = express();

app.get('/',(req,res)=>{
    res.send("server is ready");
});


app.get('/api/data',(req,res)=>{
    const data = [
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jones"}
    ]
    res.send(data);
});





const port = process.env.PORT || 8081;

app.listen(port, ()=>{
    console.log(`server at http://localhost:${port}`);
})