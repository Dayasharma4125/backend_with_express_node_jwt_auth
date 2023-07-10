const express=require("express")
const { incart, addtocart, removecart } = require("./cart/cartfunctoin")
const validationtokenhandler = require("./cart/validationhandler")
const route=express.Router()


route.use(validationtokenhandler)
route.route("/").get(incart)
route.route("/").delete(removecart).post(addtocart)
// route.route("/addtocart").post(addtocart)

module.exports=route;