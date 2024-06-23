import mongooose from 'mongoose'

const subTodoSchema=new mongooose.Schema({

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
  
},{timestamps:true})

export const SubTodo = mongooose.model("SubTodo",subTodoSchema)