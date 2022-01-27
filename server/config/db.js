const mongoose = require('mongoose');
const { MONGODB_URL, MONGO_DEBUG } = require('./config');
var debug = require('debug')('express-mongoose-es6-rest-api:index');


const connectDB = async () => {
    mongoose.connect(MONGODB_URL, { keepAlive: 1 });
    const db = mongoose.connection;

    db.once('open', () => {
        console.log('connected to database');
    })

    db.once('error', () => {
        console.log('unable to connect with database');
    })

    if (MONGO_DEBUG) {
        mongoose.set('debug', (conllectionName) => {
            debug(`collection name is ${conllectionName}`)
        });
    }
}

module.exports = connectDB;