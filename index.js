const express = require('express');
const path = require('path')
const ejs = require('ejs')
//const fs = require('fs');
const router = require('./router/userrouter.js');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json())
app.use(express.static(path.join(__dirname,"public")))

app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.set("views", path.join(__dirname, "views"));

app.use(router);

app.listen( port,()=>{
    console.log(`live on port: localhost:${port}`)
})

