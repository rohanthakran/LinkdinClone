require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser")
const app = express();
const cors = require('cors')
app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.json());
app.use(cors())
app.get('/', function (req, res) {
    // Cookies that have not been signed

    console.log('Cookies: ', req.cookies)
  
    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)
  })
  

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