const User = require("../models/user");
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");

const tokenExtractor = (req, res, next) => {
  const auth = req.get("authorization");
  if (auth && auth.toLowerCase().startsWith("bearer ")) {
    req.token = auth.substring(7);
  }
  next();
};
const userExtractor = async (req, res, next) => {
  if (!req.token) {
    return res.status(401).json({ error: "token missing" });
  }
  jwt.verify(req.token, process.env.SECRET, (error, decoded) => {
    if (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({ error: "token expired" });
      }
      return res.status(401).json({ error: "token invalid" });
    }
    const user = User.findById(decoded.id);
    req.user = user;
    next();
  });
};

const limitHandler = (_req, _res, next) => {
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
  });
  next();
};

module.exports = {
  tokenExtractor,
  userExtractor,
  limitHandler,
};
