var mongoose = require('mongoose')

const {Schema}=mongoose
const orderSchema=new Schema(

    {   
        productId:[{type:mongoose.Schema.Types.ObjectId,
        ref:'products'}],
        customerName:{type:String},
        customerAddress:{type:String},
        phoneNo:{type:Number}
        
               
    }
)
module.exports=mongoose.model("orders",orderSchema)