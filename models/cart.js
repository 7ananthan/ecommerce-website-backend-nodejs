var mongoose = require('mongoose')

const {Schema}=mongoose
const cartSchema=new Schema(

    {  
        productId:{type:mongoose.Schema.Types.ObjectId,
        ref:'products'},
        productCount:{type:Number,default:1},
               
    }
)
module.exports=mongoose.model("cart",cartSchema)