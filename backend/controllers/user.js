const User = require("../models/User")

exports.register = async(req,res) =>{
    try {   
        const {name,email,password} = req.body
        //find User
        let user = await User.findOne({email})

        if(user){
            return res.status(400).json({success:false,message:"User Already exits"})
        }
        user = await User.create({name,email,password,avatar:{public_id:"public id",url:"url"}})

        res.status(201).json({
            success:true,
            user
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message :error.message
        })
    }
}
//Login user 
exports.login = async(req,res) =>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({email}).select("+password")
        if(!user){
            return res.status(400).json({
                success : false,
                message :"USer does not exit"
            })
        }
        const isMatch = await user.matchPassword(password)
        if(!isMatch) {
            return res.status(400).json({
                success:false,
                message:"You password is incorrect"
            })
        }
        const token = await user.generateToken();
        res.status(200).cookie("token", token).json({
            success:true,
            user,
            token
            
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}