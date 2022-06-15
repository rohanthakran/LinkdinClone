const Post = require("../models/Post")
const User = require("../models/User")
exports.createPost = async(req,res) =>{
    // console.log(req.user._id)
    try {
        const newPostData = {
            caption : req.body.caption,
            image :{
                public_id:"req.bodyid",
                url : "req.body.url"
            },
            owner: req.user._id
          
            
        }
        const newPost = await Post.create(newPostData);
        const user = await User.findById(req.user._id);
      

        user.posts.push(newPost._id)

        await user.save()
        res.status(201).json({
            success:true,
            post:newPost,
            message:"Post created",
        })
    } catch (error) {
        console.log(error)
    }
}