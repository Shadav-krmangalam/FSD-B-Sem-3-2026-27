const userSchema = require("../models/user");

const signup = async(req,res)=>{
    let {name,email,password,age} = req.body;

    // if(!name || !email||!password||!age){
    //     return res.status(403).send("Bad request - Invalid credentials")
    // }

   let user = await userSchema.create({name,email,password,age})

   res.status(201).json({
    "message":"User Created Successfully",
    "data":user
   })

}


const login = async(req,res)=>{
    let {email,password}=req.body;

    if(!email||!password){
        return res.status(403).send("Email and password are required")
    }

   let user = await userSchema.findOne({email});
   if(!user){
    return res.status(404).send("User not found - Please signup")
   }

   if(user.password!==password){
    return res.status(401).send("Invalid Credentials");

   }

   res.status(200).json({
    message:"User Login Successfully",
    data:user
   })

}

module.exports = {signup,login}