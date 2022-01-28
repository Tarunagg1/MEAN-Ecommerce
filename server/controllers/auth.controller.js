const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config/config');

function generateAuthToken(payloadData) {
    return jwt.sign(payloadData, JWT_SECRET_KEY, { expiresIn: '2d' })
}


module.exports = {
    generateAuthToken,
}








