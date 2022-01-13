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
  const decodedToken = jwt.verify(
    req.token,
    process.env.SECRET,
    (error, decoded) => {
      if (error) {
        return res.status(500).json({ error: "token expired or invalid" });
      }
      return decoded;
    }
  );
  const user = User.findById(decodedToken.id);
  if (user) {
    req.user = user;
  }
  next();
};

const errorHandler = (error, _req, res, next) => {
  console.error(error.message);
  if (error.name === "CastError") {
    return res.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message });
  }
  next(error);
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
  errorHandler,
  limitHandler,
};
