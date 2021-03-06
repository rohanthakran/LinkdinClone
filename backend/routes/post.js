const express = require("express");
const router = express.Router();

const {createPost,likeAndUnlikePost, deletePost,getPostofFollwoing,updateCaption,addcomment,commentDelete} = require("../controllers/post");
const { isAuthenticated } = require("../middlewares/auth");

router.route("/post/upload").post(isAuthenticated,createPost)
router.route("/follwoingpost").get(isAuthenticated,getPostofFollwoing)

router.route("/post/comment/:id").put(isAuthenticated,addcomment).delete(isAuthenticated,commentDelete)
router.route("/post/:id").get(isAuthenticated,likeAndUnlikePost).put(isAuthenticated,updateCaption).delete(isAuthenticated,deletePost)



module.exports = router