const mongoose = require('mongoose');
const {MONGODB_URL} = require('./config');

const connectDB = async ()=>{
    const connection = await mongoose.connect(MONGODB_URL,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:true,
        useUnifiedTopology:true
    })
    console.log('connection extablist');
}

module.exports = connectDB;