const express =require('express')
const orderRouter= express.Router()
const  order =require('../controllers/order')


//Returns all products inside the cart []
orderRouter.get("/inside",order.viewAll)

//api to add product to cart [input :]

orderRouter.post("/add",order.add)

//api to remove a product from cart [input :]
//orderRouter.post("delete",cart.removeProduct)

module.exports=orderRouter