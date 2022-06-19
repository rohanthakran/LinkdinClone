const express = require("express");
const router = express.Router();

const {createPost,likeAndUnlikePost, deletePost,getPostofFollwoing} = require("../controllers/post");
const { isAuthenticated } = require("../middlewares/auth");

router.route("/post/upload").post(isAuthenticated,createPost)
router.route("/follwoingpost").get(isAuthenticated,getPostofFollwoing)

router.route("/post/:id").get(isAuthenticated,likeAndUnlikePost).delete(isAuthenticated,deletePost)



module.exports = router