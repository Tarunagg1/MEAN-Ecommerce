const router = require('express').Router();
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');

const asyncHandler = require('express-async-handler');


router.post('/register', asyncHandler(insert), login);
router.post('/login', asyncHandler(getUserByEmailPassword), login);
router.get('/findme', asyncHandler(findMe));


async function findMe(){
    try {
        
    } catch (error) {
        return res.status(401).json({ message: "Authincation Failed", error })   
    }
}

async function insert(req, res, next) {
    const user = req.body;
    try {
        const userDataresp = await userController.registerController(user);
        req.user = userDataresp;
        next();
    } catch (error) {
        return res.status(400).json({ message: "Registration Failed", error })
    }
}


async function getUserByEmailPassword(req, res) {
    const user = req.body;
    try {
        const userDataresp = await userController.loginController(user);
        return res.status(200).json(userDataresp);
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

function login(req, res) {
    const user = req.user;
    const token = authController.generateAuthToken(user);
    return res.json({ user: user, token: token })
}


module.exports = router;
