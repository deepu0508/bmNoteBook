const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');
const router = express.Router();

const JWT_TOKEN = 'DeepuBratadipta145@'

// Create a User using POST : /api/auth/createuser -> No Login Required
router.post('/createuser', [
    body('name', "Enter valid name").isAlpha().isLength({ min: 3 }),
    body('username', "Enter valid username").isLength({ min: 5 }).isAlphanumeric(),
    body('email', 'Enter valid email address').isEmail(),
    body('password', 'Password must be 8 characters').isLength({ min: 8 })
], async (req, res) => {

    // Error handle user to give coorect information or not
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // for random error catch
    try {
        // Search in Database for finding user already exists or not
        let user = await User.findOne({ email: req.body.email, username: req.body.username });
        if (user) {
            return res.status(400).json({ errors: "Sorry a user with email is already exists" })
        }

        // Ecrypting Password
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        // Create User an data save in db
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: secPass
        });

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_TOKEN);
        res.json({ authToken });
    } catch (err) {
        console.error(err.message);
        res.status(400).json({ errors: "Some error occured" })
    }

})

// Router 2: Log in User wiht authentication usig POST:/api/auth/login
router.post('/login', [
    body("username", "Enter valid username").isAlphanumeric().isLength({ min: 5 }),
    body("password", "Please enter correct password").exists()
], async (req, res) => {

    // check user input are correct or not
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: "Please enter valid username or password!" })
    }

    try {
        // destructing username and password tfrom request
        const { username, password } = req.body;
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(400).json({ error: "Please enter correct username" });
        }

        // check password are correct or not through decoding
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please enter correct password!" });
        }

        // Autthentication toekn are correct or not
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_TOKEN);
        res.json({ authToken });
    } catch (error) {
        console.error(error)
        res.json({ error: "Some error occured" })
    }

})

// Router 3: Get Logged in User details using POST : /api/auth/getuser
router.post("/getuser", fetchUser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(401).send({ error: "Internal Server Error" });
    }
})

module.exports = router