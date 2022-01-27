const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');


async function registerController(user) {
    try {
        const hashPassword = await bcrypt.hash(user.password, 10);
        delete user.password;
        user.password = hashPassword
        const newUser = new userModel(user);
        const respUser = await newUser.save();
        return respUser;
    } catch (error) {
        throw new Error("Internal Error");
    }
}

async function loginController({ email, password }) {
    try {
        const isUser = await userModel.findOne({ email });
        if (isUser) {
            const isPasswordMatch = await bcrypt.compare(password, isUser.password);
            if (isPasswordMatch) {
                const { name, email, roles, isactive } = isUser;

                const resp = {
                    message: 'Login successfully',
                    user: { name, email, roles, isactive }
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
    loginController
}

