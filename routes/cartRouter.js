const express =require('express')
const cartRouter= express.Router()
const  cart =require('../controllers/cart')


//Returns all products inside the cart []
cartRouter.get("/inside",cart.viewAll)

//api to add product to cart [input :]

cartRouter.post("/add",cart.addProduct)

//api to remove a product from cart [input :]
cartRouter.post("delete",cart.removeProduct)

module.exports=cartRouter