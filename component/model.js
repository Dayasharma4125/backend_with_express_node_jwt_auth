const mongoose = require('mongoose')

const userschema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique:true,
    },
    phoneno: {
        type: String,
        require: true,
    },
    password: {
        type:String,
        require: true,
    },
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", userschema);