//imports
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const imageRouter = require("./controllers/image");
const middleware = require("./utils/middleware");
const morgan = require("morgan");
const mongoose = require("mongoose");
const config = require("./utils/config");
require("dotenv").config();
app.use(middleware.tokenExtractor);
app.use(middleware.limitHandler);

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log("error: ", error.message);
  });

morgan.token("content", function (req) {
  return JSON.stringify(req.body);
});

if (process.env.NODE_ENV === "prod" || process.env.NODE_ENV === "test") {
  app.use(express.static("build"));
}
app.use(express.json());
app.use(cors());
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/images", imageRouter);
app.use(morgan(":method :url :response-time :content"));

module.exports = app;
