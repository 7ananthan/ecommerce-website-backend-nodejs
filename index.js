var express = require("express")
var mongoose =require('mongoose')
var morgan =require('morgan')
const bodyParser = require("body-parser")
const productRouter =require("./routes/productRouter")
const cartRouter =require("./routes/cartRouter")
const app=express()
var cors = require('cors')

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

mongoose.connect('mongodb://localhost:27017/cavalry')
mongoose.connection.once('open',()=>{
    console.log("DB Connection Established!!!")
})
app.listen(5000,()=>{
    console.log("Server Started on PORT 5000")
})
app.use("/api/v1/cart",cartRouter)
app.use("/api/v1/product",productRouter)
