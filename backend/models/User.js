const mongoose = require("mongoose");
const  bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    avatar :{
        public_id: String,
        url :String
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password :{
        type:String,
        required:true,
        minlength:6,
        select:false//means when ever we get user except password it will come out
    },
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    followers :[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    followings :[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]

})
userSchema.pre("save", async function(next) {
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
    }
    next();
})
userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password,this.password,)
    // console.log(password,this.password, this.name,"this",this._id,this.id)
}

userSchema.methods.generateToken = () =>{
    return jwt.sign({_id: this._id}, process.env.JWT_SECRET) 
}

module.exports = mongoose.model("User",userSchema)