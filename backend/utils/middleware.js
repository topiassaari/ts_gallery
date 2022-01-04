const User = require("../models/user");
const jwt = require("jsonwebtoken");

const tokenExtractor = (req, res, next) => {
  const auth = req.get("authorization");
  if (auth && auth.toLowerCase().startsWith("bearer ")) {
    req.token = auth.substring(7);
  }
  next();
};
const userExtractor = async (req, res, next) => {
  if (!req.token) {
    return res.status(401).json({ error: "token missing or invalid" });
  }
  const decodedToken = jwt.verify(req.token, process.env.SECRET);
  req.user = await User.findById(decodedToken.id);
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

module.exports = {
  tokenExtractor,
  userExtractor,
  errorHandler,
};
