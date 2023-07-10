const  express = require("express");
const {register ,login}  = require("../component/function.js");
const route=express.Router()

route.route("/register").post(register)
route.route("/login").post(login)

module.exports=route