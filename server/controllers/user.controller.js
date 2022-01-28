const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');


async function registerController(user) {
    try {
        const hashPassword = await bcrypt.hash(user.password, 10);
        delete user.password;
        user.password = hashPassword
        const newUser = new userModel(user);
        const respUser = await newUser.save();
        let respdata = {
            _id: respUser._id,
        }
        return respdata;
    } catch (error) {
        throw new Error("Internal Error");
    }
}


async function getUserByEmailPassword(email, password) {
    let user = await userModel.findOne({ email });
    if (isValidPass(user, password, user.password)) {
        user = user.toObject();
        delete user.password;
        return user;
    } else {
        return null;
    }
}

async function isValidPass(user, password, hastpass) {
    return user && bcrypt.compareSync(password, hastpass);
}

async function getUserById(id) {
    let user = await userModel.findById(id);
    if (user) {
        user = user.toObject();
        delete user.password;
        return user;
    } else {
        return null;
    }
}

async function loginController({ email, password }) {
    try {
        const isUser = await userModel.findOne({ email });
        if (isUser) {
            const isPasswordMatch = await bcrypt.compare(password, isUser.password);
            if (isPasswordMatch) {
                const { _id } = isUser;
                const resp = {
                    message: 'Login successfully',
                    user: _id
                }
                return resp;
            } else {
                throw new Error("Invalid email or password");
            }
        } else {
            throw Error("Invalid email or password");
        }

    } catch (error) {
        throw new Error(error.message);
    }
}



module.exports = {
    registerController,
    loginController,
    getUserById,
    getUserByEmailPassword
}

