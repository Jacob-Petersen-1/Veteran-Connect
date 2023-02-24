const jwt = require("jsonwebtoken");
const config = require("config");
const dotenv = require("dotenv").config();

module.exports = function (req, res, next) {
  // Get token from header
  const bearerHeader = req.headers["authorization"];

  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    //split the space at the bearer
    const bearer = bearerHeader.split(" ");
    // Get token from string
    const bearerToken = bearer[1];

    req.token = bearerToken;
    try {
      const decoded = jwt.verify(bearerToken, process.env.JWT);
      req.user = decoded.user;
      next();
    } catch (error) {
        res.status(401).json({ msg: "Token is not valid" });

    }
  } else {
    res.status(403).json({ msg: "Token is not valid" });
  }
};
