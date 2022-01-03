//imports
const Image = require("./models/image");
const express = require("express");
const app = express();
const userRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const middleware = require("./utils/middleware");
app.use(middleware.tokenExtractor);

morgan.token("content", function (req) {
  return JSON.stringify(req.body);
});

app.use(express.json());
app.use(cors());
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
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
  Image.find({}).then((images) => {
    res.json(images.map((image) => image.toJSON()));
  });
});

app.post("/api/images", middleware.userExtractor, (req, res, next) => {
  if (req.token === undefined) {
    res.status(401).json({ error: "Provide correct token" });
  }

  const img = req.body;
  console.log(img);
  if (img === undefined || img.url === undefined) {
    return res.status(400).json({ error: "img missing" });
  }
  const newImg = new Image({
    url: img.url,
    desc: img.desc,
    year: parseInt(img.year),
  });
  newImg
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
