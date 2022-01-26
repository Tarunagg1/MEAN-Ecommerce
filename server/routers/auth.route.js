const router = require('express').Router();
const userController = require('../controllers/user.controller');
const asyncHandler = require('express-async-handler');


router.post('/register', asyncHandler(insert));

async function insert(req, res) {
    const user = req.body;
    const userDataresp = userController.registerController(user);
    return res.status(201).json({ message: "Registration successfully", userDataresp })
}


module.exports = router;
