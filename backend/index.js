//imports
const express = require("express");
const app = express();
const userRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const imageRouter = require("./controllers/image");
const middleware = require("./utils/middleware");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
app.use(middleware.tokenExtractor);
app.use(middleware.errorHandler);

morgan.token("content", function (req) {
  return JSON.stringify(req.body);
});

app.use(express.json());
app.use(cors());
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/images", imageRouter);
app.use(express.static("build"));
app.use(morgan(":method :url :response-time :content"));
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
