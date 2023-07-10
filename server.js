const express=require("express")
const connectdb=require('./component/database.js')

const app=express()
connectdb();
app.use(express.json())
// console.log(process.env)
app.listen(5001,()=>{console.log('server is running at 5001')})

app.use('/',require('./container/container.js'))
app.use('/cart',require('./component/cart.js'))