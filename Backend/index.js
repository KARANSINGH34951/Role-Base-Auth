import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import cookieParser from 'cookie-parser'
import {ConfigDB} from './config/ConfigDB.js'
import AuthRouter from './routes/Auth.js'
import AdminRouter from './routes/Admin.js'

const app=express();
const PORT= process.env.PORT || 5000;

//route
app.use(express.json())
app.use(cookieParser())
app.use(cors())


app.use("/auth",AuthRouter)
app.use("/admin",AdminRouter);


app.get("/",(req,res)=>{
  res.json({message:"Welcome to MERN Stack"});
})



ConfigDB()
.then(()=>{
  console.log("database connected..");
  app.listen(PORT,()=>{
    console.log("server running..",PORT);
    
  })  
}).catch(err=>{
  console.log("error occur: ",err);
})