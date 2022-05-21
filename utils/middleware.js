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

module.exports = {
  tokenExtractor,
  userExtractor,
};
