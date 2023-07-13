const express=require("express")
const connectdb=require('./component/database.js')
const Port=process.env.Port||6020
const app=express()
connectdb();
app.use(express.json())
// console.log(process.env)
app.listen(Port,()=>{console.log(`server is running at ${Port}`)})

app.use('/',require('./container/container.js'))
app.use('/cart',require('./component/cart.js'))
