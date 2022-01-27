const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
        match: [
            /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
            "Please enter valid email address"
        ]
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    isactive: {
        type: Boolean,
        default: true
    },
    roles: [{ type: String }]
}, { timestamp: true, versionKey: false })


const registermodal = mongoose.model('user', registerSchema);

module.exports = registermodal;