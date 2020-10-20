
const { model } = require('../models/product');
const productModel =require('../models/product')

module.exports.viewAll =async(req,res)=>{
try {
    var result=await productModel.find()
        res.send(result)
    
} catch (error) {
    console.log(error);
    res.status(500).send(error);
}


}

// model.exports.viewOne =async(req,res)=>{
//     try {
//         var result=await productModel.find()
//             res.send(result)
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error);
//     }

// }

module.exports.addProduct =async(req,res)=>{

    try {

        let _product =new productModel({
            "productName":req.body.productName,
            "productDescription":req.body.productDescription,
            "productImage":req.body.productImage,
            "productPrice":req.body.productPrice,
            "productQty":req.body.productQty
        })
        let data =await _product.save()
        res.send(data)
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }

}

