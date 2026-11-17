const mongoose = require("mongoose")

const user = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:6,
        maxLength:10
    },
    age:{
        type:Number,
        required:true,
        min:18,
        max:60
    }
})
const userSchema = mongoose.model("user",user)
module.exports = userSchema;