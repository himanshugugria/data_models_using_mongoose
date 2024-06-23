import mongoose from 'mongoose'

const todoModelSchema=new mongoose.Schema({

  content:{
    type:String,
    required: true,
  },
  checkbox:{
    type:Boolean,
    default:false,
  },
  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  },

  subTodos:[    // array to hold subtodos
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"SubTodo"
    },
  ]

},{timestamps:true})

export const Todo =mongoose.model("Todo",todoModelSchema)