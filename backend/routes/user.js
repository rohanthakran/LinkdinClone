const express = require("express");
const router = express.Router();
const {register, login, followUser,logout, updatePassword,updaProfile} = require("../controllers/user")
const {isAuthenticated}  = require("../middlewares/auth")

router.route("/signupuser").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/update/password").put(isAuthenticated,updatePassword)
router.route("/update/profile").put(isAuthenticated,updaProfile)
router.route("/follow/:id").get(isAuthenticated,followUser)

module.exports = router