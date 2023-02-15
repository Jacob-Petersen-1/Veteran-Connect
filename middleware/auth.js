const jwt = require('jsonwebtoken')
const config = require('config')
const dotenv = require("dotenv").config();

module.exports = function(req, res, next) {
    // Get Token from header
    const token = req.header('x-auth-token');

    // Check if no token
    if(!token) {
        return res.status(401).json({msg: "No token, authorization denied"})

    }

    try {
        const decoded = jwt.verify(token, process.env.JWT);

        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({msg: 'Token is not valid'})
    }

}