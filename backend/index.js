require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())
app.use(express.json());


mongoose.connect(process.env.DATABASE)
        .then(() =>{
            console.log("DB CONNECTED")
        })

const port = process.env.PORT;

const  post  = require('./routes/post');
const user  =require("./routes/user")
app.use("/api", post)
app.use("/api",user)



app.listen(port,()=> console.log(`Server is running on port ${port}`))