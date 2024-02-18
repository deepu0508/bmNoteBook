const jwt = require("jsonwebtoken");
const JWT_TOKEN = 'DeepuBratadipta145@'

const fetchUser = (req, res, next) => {
    // Get user form jwt token and add id from request object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please use authenticate valid token" })
    }

    try {
        const data = jwt.verify(token, JWT_TOKEN);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate valid user token" })
    }

}

module.exports = fetchUser;