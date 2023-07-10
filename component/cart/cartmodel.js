const mongoose = require('mongoose')

const cartschema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User",
    },
    id1:{
        type:Number,
    },
    num:{
        type:Number,
    },
    title: {
        type: String,
        require: true,
        unique:true
    },
    image: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
    },
    price: {
        type: String,
        require: true
    },
},
    {
        timestamp: true,
    }
)



module.exports=mongoose.model("Cartdata",cartschema)