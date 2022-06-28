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

        const token = await user.generateToken();
        res.status(200).cookie("token", token,{expires:new Date(Date.now() +90*24*60*60*1000),httpOnly:true}).json({
            success:true,
            user,
            token
            
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
        const token = await user.generateToken(user._id);
        res.status(200).cookie("token", token,{expires:new Date(Date.now() +90*24*60*60*1000),httpOnly:true}).json({
            success:true,
            user
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
exports.logout = async (req, res) => {
    try {
      res
        .status(200)
        .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
        .json({
          success: true,
          message: "Logged out",
        });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
exports.followUser = async (req,res) =>{
    try {
        
        const userToFollow = await User.findById(req.params.id);
        const loggedinUser =  await User.findById(req.user._id);
        console.log("The user",userToFollow)
        console.log("loginnuser", loggedinUser)
        if(!userToFollow){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
       if (loggedinUser.following.includes(userToFollow._id)) {
        const indexLogin=  loggedinUser.following.indexOf(userToFollow._id);
        const indexFollow= userToFollow.followers.indexOf(loggedinUser._id);

        loggedinUser.following.splice(indexLogin,1)
        userToFollow.followers.splice(indexFollow,1);
        await loggedinUser.save();
        await userToFollow.save();

        res.status(200).json({
            success:true,
            message:"User unfollowed"
        })
       } else {
        loggedinUser.following.push(userToFollow._id);
        userToFollow.followers.push(loggedinUser._id);

        await loggedinUser.save();
        await userToFollow.save();

        res.status(200).json({
            success:true,
            message:"User followed"
        })
       }


    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
}

exports.updatePassword = async(req,res) =>{
    try {
        const user = await User.findById(req.user._id);
        const {oldPassword,newPassword} = req.body;
        const isMatch =await user.matchPassword(oldPassword)

        if(!isMatch) {
            return res.status(400).json({
                success:false,
                message:"Incorrect Old password"
            })
        }
        user.password = newPassword //we have method in which if password save or modfied it gonna hash automaitcllay with method insid user model
        await user.save()

        res.status(200).json({
            success:true,
            message:"password updated"
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message : error.message
        })
    }
}
exports.updaProfile = async(req,res) =>{
    try {
        const user = await User.findById(req.user._id);
        const {name,email} = req.body;
        if(name){
            user.name = name
        }
        if(email){
            user.email = email
        }
        await user.save()

        res.status(200).json({
            success:true,
            message:"Profile updated"

        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}