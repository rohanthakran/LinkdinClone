const express = require("express");
const router = express.Router();
const {register, login, followUser,logout, updatePassword,updaProfile,deletMyProfile,myProfile,getAllusers,getUserProfile,forgotPassowrd,resetPassword} = require("../controllers/user")
const {isAuthenticated}  = require("../middlewares/auth")

router.route("/signupuser").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/update/password").put(isAuthenticated,updatePassword)
router.route("/update/profile").put(isAuthenticated,updaProfile)
router.route("/delete/me").delete(isAuthenticated,deletMyProfile)
router.route("/myinfo").get(isAuthenticated,myProfile)
router.route("/users").get(isAuthenticated,getAllusers)
router.route("/forgot/password").post(forgotPassowrd)
router.route("/password/reset/:token").put(resetPassword)


router.route("/user/:id").get(isAuthenticated,getUserProfile);
router.route("/follow/:id").get(isAuthenticated,followUser)

module.exports = router