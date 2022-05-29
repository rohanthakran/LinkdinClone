require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.DATABASE)
        .then(() =>{
            console.log("DB CONNECTED")
        })

const port = process.env.PORT;


app.get("/",(req,res) => res.send("Hello Orld"));
app.listen(port,()=> console.log(`Server is running on port ${port}`))