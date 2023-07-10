const asynchandler=require("express-async-handler")
const Cartdata = require("./cartmodel")


const incart=asynchandler( async(req,res)=>{
     const cartdata= await Cartdata.find({user_id:req.User.userid})
     res.status(200).json(cartdata)
})
const addtocart=asynchandler( async(req,res)=>{
    const {title,image,description,price,num,id1}=req.body
    if(!(title||image||description||price||num||id1)){
        res.status(400)
        throw new Error("enter all detals")
    }
    const updatedata=Cartdata.create({
        id1,
        num,
        title,
        image,
        description,
        price,
        user_id:req.User.userid,
    })
    res.status(200).json({message:"data uploded succsesfully"})
})
const removecart=asynchandler( async(req,res)=>{
    const {_id}=req.body
    if(!_id){
        res.status(400)
        throw new Error("enter all detals")
    }
    const removed= await Cartdata.findByIdAndDelete(_id)
    res.status(200).json({message:"removed",removed})
})

module.exports={
    incart,
    addtocart,
    removecart,
}