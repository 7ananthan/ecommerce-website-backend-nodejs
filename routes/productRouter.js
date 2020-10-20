const express =require('express')
const productRouter= express.Router()
const product =require('../controllers/product')

//Returns all products  []
productRouter.get("/allproducts",product.viewAll)

//api to add a new product [input :]

productRouter.post("/add",product.addProduct)

module.exports=productRouter