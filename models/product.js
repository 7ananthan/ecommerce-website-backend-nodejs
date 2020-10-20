var mongoose = require('mongoose')

const {Schema}=mongoose
const productSchema=new Schema(

    {
        productName:{type:String,required:true},
        productDescription:{type:String},
        productImage:{type:String,required:true},
        productPrice:{type:Number,required:true},
        productQty:{type:Number,min:0}
    }
)

module.exports=mongoose.model("products",productSchema)