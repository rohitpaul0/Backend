import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    usename:{
        type: String,
        required:true,
        unique:true,
        lowercase: true
    },
    email:{
        type: String,
        required:true,
        unique:true,
        lowercase: true
    },
    password:{
        type: String,
        required:true,
    }
},{timestams:true});

export const User= mongoose.model('User', userSchema)