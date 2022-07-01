const User = require("../models/User")
const Post = require("../models/Post")
const {sendEmail} = require("../middlewares/sendemail")
const crypto = require("crypto");

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
        // if(token){
        //     return res.status(404).json({
        //         success:true,
        //         message:"user already login"
        //     })
        // }
        res.status(200).cookie("token", token,{expires:new Date(Date.now() +90*24*60*60*1000),httpOnly:true}).json({
            success:true,
            user
        })
        
    } catch (error) {
        // res.status(500).json({
        //     success:false,
        //     message:error.message
        // })
        console.log(error)
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
        const user = await User.findById(req.user._id).select("+password");
        const {oldPassword,newPassword} = req.body;

        if(!oldPassword || !newPassword){
            return res.status(400).json({
                success: false,
                message:"Please provide old and new password"
            })
        }
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
exports.deletMyProfile = async(req,res) =>{
    try {
        const user = await User.findById(req.user._id);
        const posts = user.posts
        const followers = user.followers
       

        for(let i =0;i<posts.length;i++){
            const post = await Post.findById(posts[i])
            await post.remove();
        }

        for(let i =0;i<followers.length;i++){
            const follower = await User.findById(followers[i])
      
            const index = follower.following.indexOf(req.user._id);
            follower.following.splice(index,1);
            await follower.save()
        }


        for(let i =0;i<following.length;i++){
            const following = await User.findById(followings[i])
          
            const index = following.followers.indexOf(req.user._id);
            following.following.splice(index,1);
            await following.save()
        }
        await user.remove();

        res
        .status(200)
        .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
       
       
        res.status(200).json({
            success:true,
            message:"Profile Deleted"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.myProfile = async(req,res) =>{
    try {
        const user = await User.findById(req.user._id).populate("posts");
        res.status(200).json({
            success:true,
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message:error.message
        })
    }
}
exports.getUserProfile = async(req,res) =>{
    try {
        const user = await User.findById(req.params.id).populate("posts");
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
        res.status(200).json({
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
exports.getAllusers = async (req,res) =>{
    try{
        const users = await User.find({});
        res.status(200).json({
            success:true,
            users
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
exports.forgotPassowrd = async(req,res) =>{
    try {
        const user = await User.findOne({email:req.body.email})
        if(!user){
            return res.status(404).json({
                success:false,
                message:"user not found"
            })
        }
        const resetPasswordToken = user.getResetPasswordToken();
        await user.save();

        const resetUrl = `${req.protocol}:://${req.get("host")}/api/password/reset/${resetPasswordToken}`;
        const message = `Reset your Password by clicking on the link below: \n \n ${resetUrl}`
        try {
            await sendEmail({
                email:user.email,
                subject:"Reset Password",
                message
            })
            res.status(200).json({
                success:true,
                message:`Email send to ${user.email} `

            })
        } catch (error) {
            user.resetPasswordToken=  undefined,
            user.resetPasswordExpire= undefined,
            await user.save()
            // res.status(500).json({
            //     success:false,
            //     message:error.message
            // }) 
            console.log(error)
        }
         
    } catch (error) {
        // res.status(500).json({
        //     success:false,
        //     message:error.message
        // })
        console.log(error)
    }
}

exports.resetPassword = async(req,res)=>{
    try {
        const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex")
        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire:{$gt:Date.now()}
        })
        if(!user){
            return res.status(401).json({
                success:false,
                message:"Token is invalid or has expired "
            })
        }
        user.password = req.body.password
        user.resetPasswordToken=  undefined,
        user.resetPasswordExpire= undefined,

        await user.save()

        res.status(200).json({
            success:true,
            message:"Password updated"
        })


    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
      
    }
}