import express from "express"
import { userModel } from '../models/user.js';
import bcrypt from 'bcryptjs';
import { validate } from '../utilis/validate.js';
import jsonwebtoken from 'jsonwebtoken';

const AuthRouter=express.Router();

AuthRouter.post("/signup", async (req, res) => {
  try {
    validate(req);  // Perform validation
  } catch (err) {
    return res.status(400).send(err.message);  // Return validation error
  }
  const {name,role,email,password}=req.body;

  const passwordhash=await bcrypt.hash(password,10);
  console.log(passwordhash);

  const user = new userModel({
    name,
    role,
    email,
    password:passwordhash
  });  
 
  try {
    const savedUser = await user.save();  // Save the user to the database
    // console.log("User saved:", savedUser);
    res.send(savedUser);
  } catch (err) {
    // console.error("Error saving user:", err);
    res.status(500).send("Error saving user: " + err.message);  // Internal server error
  }
});

AuthRouter.post("/login",async (req,res)=>{
  try {
    const {email,password}=req.body;

    const user=await userModel.findOne({email})
    if(user){
      const comparepassword =await bcrypt.compare(password,user.password)
      
        if(comparepassword){
          //create token

          const token=jsonwebtoken.sign({_id:user._id,email:user.email},"karan@123",{expiresIn:"2h"});

          //add the token inside the cookies as the response to the user

          res.cookie("token",token,{httpOnly:true})
          res.send("Login sucess")
        }
        else{
          res.send("email or password is wrong")
        }
    }7    
  } catch (error) {
    res.status(401).send("Unauthorized request");
  }
})

AuthRouter.get("/logout",(req,res)=>{
  res.clearCookie("token");
  res.status(200).send("logout successfully")
});



export default AuthRouter