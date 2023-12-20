const express =require('express');
const app=express();

require('dotenv').config();

app.get('/',(req,res)=>{
    res.send("At Home")
})

app.get('/about',(req,res)=>{
    res.send("At About")
})

const port=process.env.PORT
app.listen(port,()=>{
    console.log(`listenig on port ${port}`);
})