const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET || "keep it secret, keep it safe";

const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    
    if (token) {
        jwt.verify(token, jwtKey, (err, decoded) => {
            if(err) return res.status(401).json(err);

            req.decoded = decoded;

            next();
        });
    } else {
        return res.status(401).json({ error: "No token provided." });
    }
}

module.exports = {
    authenticate,
    jwtKey,
};