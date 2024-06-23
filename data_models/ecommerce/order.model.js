import mongoose from 'mongoose'

const orderItemSchema = new mongoose.Schema({
  productId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },
  quantity:{
    type : Number,
    required: true,
  },
})

const orderSchema = new mongoose.Schema({
  orderedBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
  },
  orderPrice:{
    type : Number,
    required : true,
  },
  orderItems:[orderItemSchema],    // yahan pe we have to store product as well as its quantity

  address:{
    type:String,
    required: true,
  },
  status:{
    type: String,
    enum:["PENDING","CANCELLED","DELIVERED"],     // means the status can only be selected from these values
    default:"PENDING"
  }

},{timestamps:true})

export const Order = mongoose.model("Order",orderSchema)