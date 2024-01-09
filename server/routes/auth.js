const express=require("express");
const User = require("../models/user");
const authRouter=express.Router();
const bcryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");


//signUp
authRouter.post("/api/signup",async(req,res)=>{
    try {
        const {name,email,password}=req.body;

        const existingUser=await User.findOne({email});

        if(existingUser){
            return res.status(400).json({ msg: "User with same email already exists!" });
        }

       const hashedPassword=await bcryptjs.hash(password,8);

        let user=new User({
            email,
            password:hashedPassword,
            name,
        })
        user=await user.save();
        res.json(user);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

//signIn
authRouter.post("/api/signin",async(req,res)=>{
    try {
        const{email,password}=req.body;

        const user= await User.findOne({email});

        if(!user){
            return res.status(400).json({ msg: "User with same email doesn't exists!" });
        }

        const passMatch= await bcryptjs.compare(password,user.password);

        if(!passMatch){
            return res.status(400).json({ msg: "Wrong Password" });
        }

        const token=jwt.sign({id:user._id},"PasswordKey")

        res.json({token,...user._doc});

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
})

module.exports=authRouter;