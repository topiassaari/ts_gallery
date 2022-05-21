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

app.use(express.json());
app.use(cors());
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/images", imageRouter);
app.use(morgan(":method :url :response-time :content"));
if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test") {
  app.use(express.static("build"));
  //if route not available, go to SPA
  app.get("*", (_req, res) => {
    res.status(404).redirect("/");
  });
}

module.exports = app;
