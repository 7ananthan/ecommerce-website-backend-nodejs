const cartModel =require('../models/cart')

module.exports.viewAll =async(req,res)=>{
    try {
        var result=await cartModel.aggregate([
            {
                $lookup:{
                    from:"products",
                    localField:"productId",
                    foreignField:"_id",
                    as:"cartProducts"
                }
            }

        ]

        )
            res.send(result)
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
    
    
    }
    

module.exports.addProduct =async(req,res)=>{

    try {

        let _cart =new cartModel({
            "productId":req.body.productId,
            "productCount":req.body.productCount,
        })
        let data =await _cart.save()
        res.send(data)
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }

}



module.exports.removeProduct =async(req,res)=>{
try {
    let result= await cartModel.findOneAndDelete( req.body.productId)
    res.send("deleted sucessfully")
} catch (error) {
    console.log(error);
    res.status(500).send(error);
}

    
}