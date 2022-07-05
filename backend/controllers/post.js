const Post = require("../models/Post")
const User = require("../models/User")
const mongoose = require('mongoose');

// console.log(mongoose.Types.ObjectId.isValid('53cb6b9b4f4ddef1ad47f943'));
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
      
        // console.log("The user",user)
        await user.posts.push(newPost._id)

        await user.save()
        res.status(201).json({
            success:true,
            post:newPost,
            message:"Post created",
        })
    } catch (error) {
        res.status(500).json({
            error,
            message:error.message
        })
    }
    
}
exports.deletePost = async(req,res) =>{
    try {
        const post = await Post.findById(req.params.id)
        if(!post) {
            return res.status(404).json({
                success:false,
                message:"Post not found"
            })
        }
        console.log("The post ",post.owner)
        ///now check is person is authorizd to delet epost
        if(post.owner.toString() != req.user._id.toString()){
            return res.status(401).json({
                success:false,
                message:"Unauthorized"
            })
        }
        await post.remove()
        const user = await User.findById(req.user._id)//getting id of login person
        const index = user.posts.indexOf(req.params.id);
        user.posts.splice(index,1);
        await user.save()

        res.status(200).json({
            success:true,
            message:"Post deleted"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message : error.message
        })
       
    }
}
exports.likeAndUnlikePost = async (req,res) =>{
    try {
        //first we will find the post by id
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({
                success:false,
                message:"Post not found"
            })
        }
        if(post.likes.includes(req.user._id)){
            //now lets find out the index and then remove it
            const index = post.likes.indexOf(req.user._id);
            post.likes.splice(index,1);
            await post.save();

            return res.status(200).json({
                success: true,
                message:"Post unliked"
            })

        }
       else{
                post.likes.push(req.user._id);
                await post.save()

                return res.status(200).json({
                    success: true,
                    message: "Post liked"
                })
       }


    } catch (error) {
        res.status(500).json({
            success:false,
            message :error.message
        })
    }
}
exports.getPostofFollwoing = async (req,res)=>{
    try {
        const user = await User.findById(req.user._id)
        const posts = await Post.find({
            owner:{
                $in: user.following
            }
        }).populate("owner likes comments.user")
        res.status(200).json({
            success:true,
            posts:posts.reverse()
            
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
exports.updateCaption = async (req,res) =>{
    try {
        const post = await Post.findById(req.params.id);

        if(!post){
            return res.status(404).json({
                success:false,
                message:"post not found"
            })
        }
        if(post.owner.toString() !== req.user._id.toString()){
            return res.status(401).json({
                success:false,
                message:"Unauthorized"
            })
        }
        post.caption = req.body.caption;
        await post.save();

        res.status(200).json({
            success:true,
            message:"Post Caption updated"
        })

        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
exports.addcomment = async(req,res) =>{
    try {
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({
                success:false,
                message:"Post not found"
            })
        }
        let commentIndex = -1
          
        post.comments.forEach((item,index) =>{
            if(item.user.toString() === req.user._id.toString()){
                commentIndex = index;
            }
        })
      if(commentIndex !== -1){
        post.comments[commentIndex].comment = req.body.comment;
        await post.save();
        return res.status(200).json({
            success:true,
            message:"Comment updated"
        })
      }
      else{
        post.comments.push({
            user:req.user._id,
            comment: req.body.comment,
        })
        await post.save()

        return res.status(200).json({
            success:true,
            message:"Commnet added"
        })
      }

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
exports.commentDelete = async (req,res) =>{
    try {
        const post = await Post.findById(req.params.id);
        
        if(!post){
            return res.status(404).json({
                success:false,
                message:"Post not found"
            })
        }
        if(post.owner.toString() === req.user._id.toString()){

            if(req.body.commentId == undefined){
                return res.status(400).json({
                    success:false,
                    message:"Comment id required"
                })
            }
            post.comments.forEach((item,index) =>{
                if(item._id.toString() === req.body.commentId.toString()){
                    return post.comments.splice(index,1);

                }
            }) 
            await post.save()

            res.status(200).json({
                success:true,
                message:"Selected Comment deleted"
            })
        
        }
        else{
            post.comments.forEach((item,index) =>{
                if(item.user.toString() === req.user._id.toString()){
                    return post.comments.splice(index,1);

                }
            }) 
            await post.save()

            res.status(200).json({
                success:true,
                message:"Your comment deleted"
            })
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}