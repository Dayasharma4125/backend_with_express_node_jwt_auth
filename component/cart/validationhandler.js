const asynchandler=require("express-async-handler")

const jwt =require("jsonwebtoken")

const validationtokenhandler=asynchandler(async (req,res,next)=>{
    let token;
    let authheader=req.headers.Authorization || req.headers.authorization
    if(authheader && authheader.startsWith("Bearer")){
        token = authheader.split(" ")[1];
        jwt.verify(token,process.env.MYSECRETE,(err,decoded)=>{
            if(err){
                res.status(401)
                throw new Error("not authrised")
            }
            req.User = decoded.user;
            next();
        })
        if(!token){
            res.status(401)
            throw new Error("tocken is expired or not provided")
        }
    }

})

module.exports=validationtokenhandler;