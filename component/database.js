const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const dbid = process.env.MONGO_ID;

const connectdb = async () => {
    try {
        const connect = await mongoose.connect(dbid,{ useNewUrlParser: true })
        console.log("database connected ", connect.connection.host, connect.connection.name);
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectdb;