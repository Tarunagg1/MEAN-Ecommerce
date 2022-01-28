require('dotenv').config();

module.exports ={
    PORT:process.env.PORT,
    MONGODB_URL:process.env.MONGODB_URL,   
    env:process.env.NODE_ENV,
    MONGO_DEBUG:process.env.MONGO_DEBUG,
    JWT_SECRET_KEY:process.env.JWT_SECRET_KEY
}
