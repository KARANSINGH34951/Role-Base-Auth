import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import ConfigDB from './config/ConfigDB'

const app=express();



app.get("/",(req,res)=>{
  res.json("Hello World");
})

app.listen(3000,()=>{
  ConfigDB();
  console.log("server running..");
  
})