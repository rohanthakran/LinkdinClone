const jwt = require("jsonwebtoken")
const User = require("../models/User")
exports.isAuthenticated = async(req,res,next) =>{
    
    try {
         const {token} = req.cookies;
        
        if(!token) {
            return res.status(401).json({
             message :" Please login first"
         })
        }
         const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //  console.log("The decode", decoded._id)
         req.user = await User.findById(decoded)
        //  console.log(req.user._id)
         
         next()
    } catch (error) {
       console.log(error)
    }
   
}