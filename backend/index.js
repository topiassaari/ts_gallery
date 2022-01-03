//imports
const Images = require("./models/images");
const express = require("express");
const app = express();
const userRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const middleware = require("./utils/middleware");

morgan.token("content", function (req) {
  return JSON.stringify(req.body);
});

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use(cors());
app.use(express.static("build"));
app.use(morgan(":method :url :response-time :content"));

const errorHandler = (error, _req, res, next) => {
  console.error(error.message);
  if (error.name === "CastError") {
    return res.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message });
  }

  next(error);
};

app.get("/api/images", (req, res) => {
  Images.find({}).then((images) => {
    res.json(images.map((image) => image.toJSON()));
  });
});

app.get("/api/:id", (req, res, next) => {
  Images.findById(req.params.id)
    .then((image) => {
      res.json(image.toJSON());
    })
    .catch((error) => next(error));
});

app.post("/api/images", middleware.userExtractor, (req, res, next) => {
  if (req.token === undefined) {
    res.status(401).json({ error: "Provide correct token" });
  }
  const requestBody = req.body;
  console.log(requestBody.image);
  const img = requestBody.image;
  if (img === undefined) {
    return res.status(400).json({ error: "img missing" });
  }
  const newImg = new Image({
    img,
  });
  post
    .save()
    .then((saved) => {
      res.json(saved.toJSON());
    })
    .catch((error) => next(error));
});

app.use(errorHandler);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
