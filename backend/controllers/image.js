const imageRouter = require("express").Router();
const Image = require("../models/image");
const middleware = require("../utils/middleware");

imageRouter.get("/", (req, res) => {
  Image.find({}).then((images) => {
    res.json(images.map((image) => image.toJSON()));
  });
});

imageRouter.post("/", middleware.userExtractor, (req, res, next) => {
  if (req.token === undefined) {
    res.status(401).json({ error: "Provide correct token" });
  }
  const img = req.body;
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

module.exports = imageRouter;
