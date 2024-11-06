import mongoose from "mongoose"
import { Schema } from 'mongoose'

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    role:{
      type: String,
      enum: ['admin', 'user'],
      default: 'user'
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{timestamps: true})  

export const userModel= mongoose.model('User', user)

