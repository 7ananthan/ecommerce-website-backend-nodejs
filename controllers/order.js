const { Mongoose } = require('mongoose')
const orderModel =require('../models/order')


module.exports.viewAll =async(req,res)=>{
    try {
        var result=await orderModel.find().populate('products')
        res.send(result)
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
        
    }
    

module.exports.add =async(req,res)=>{

    try {

        let _order =new orderModel({
            "productId":req.body.productId,
                "customerName":req.body.customerName,
                "customerAddress":req.body.customerAddress,
                "phoneNo":req.body.phoneNo
            
        })
        let data =await _order.save()
        res.send(data)
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }

}



// module.exports.removeProduct =async(req,res)=>{
// try {
//     let result= await cartModel.findOneAndDelete( req.body.productId)
//     res.send("deleted sucessfully")
// } catch (error) {
//     console.log(error);
//     res.status(500).send(error);
// }