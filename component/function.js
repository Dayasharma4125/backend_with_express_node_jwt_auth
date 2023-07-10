const asynchandler = require("express-async-handler")
const express = require('express')
const User = require('./model')
const bct = require('bcrypt')
const jwt=require('jsonwebtoken');

const register = asynchandler(async (req, res) => {
    const { name, email, phoneno, password } = req.body
    if (!(name || email || phoneno || password)) {
        res.status(404)
        throw new Error("all details not provided")
    }
    const emailexists = await User.findOne({email});
    if (emailexists) {
        res.status(400)
        throw new Error("user alredy exists")
    }
    let password1 = await bct.hash(password, 10)
    const user = await User.create({
        name,
        email,
        phoneno,
        password: password1,
    })
    if (user) {
        res.status(200).json({ name: name, email: email, phoneno: phoneno, password: password1 })
    }
    else {
        res.status(400).send("validataion error")
    }
})
const login = asynchandler(async (req, res) => {
    const {email, password } = req.body
    if (!( email || password)) {
        res.status(404)
        throw new Error("not fill all details")
    }
    const user = await User.findOne({email })
    if (user && (await bct.compare(password,user.password))) {
        const accsestoken =jwt.sign({
            user:{
                email:user.email,
                phoneno:user.phoneno,
                userid:user.id,
            }
        },process.env.MYSECRETE,{expiresIn:"30000m"})

        res.status(200).json({ email: email, accsestoken:accsestoken })
    }
    if(!(user)){
        res.status(400).json({message:"user not registerd"})
    }
    if(!(await bct.compare(password,user.password))){
        res.status(402)
        throw new Error("wrong password")
    }
})
module.exports = {
    register,
    login,
}