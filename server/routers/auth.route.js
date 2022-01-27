const router = require('express').Router();
const userController = require('../controllers/user.controller');
const asyncHandler = require('express-async-handler');


router.post('/register', asyncHandler(insert));
router.post('/login', asyncHandler(login));


async function insert(req, res) {
    const user = req.body;
    try {
        const userDataresp = await userController.registerController(user);
        return res.status(201).json({ message: "Registration successfully", userDataresp })
    } catch (error) {
        return res.status(400).json({ message: "Registration Failed", error })
    }
}


async function login(req, res) {
    const user = req.body;
    try {
        const userDataresp = await userController.loginController(user);
        return res.status(200).json(userDataresp);
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}


module.exports = router;
