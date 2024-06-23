import mongoose from 'mongoose'

const userSchema=new mongoose.Schema(
  {
    username:{
      type:String,
      requrired: true,
      unique: true,
      lowercase: true,
    },
    email:{
      type:String,
      unique: true,
      required: true,
    },
    password:{
      type:String,
      requrired: [true, "password is required!"],
    },
},{timestamps:true})

export const User = mongoose.model("User",userSchema)