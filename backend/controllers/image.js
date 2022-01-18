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
    year: img.year,
    dateAdded: new Date(),
  });
  newImg.save().then((saved) => {
    res.json(saved.toJSON());
  });
});

imageRouter.put("/:id", async (req, res) => {
  const img = {
    url: req.body.url,
    desc: req.body.desc,
    year: req.body.year,
  };
  const updated = await Image.findByIdAndUpdate(req.params.id, img, {
    new: true,
  });
  if (updated) {
    res.json(updated.toJSON());
  } else {
    res.status(404).end();
  }
});

imageRouter.delete("/:id", middleware.userExtractor, async (req, res) => {
  if (req.params.id) {
    Image.findByIdAndDelete(req.params.id).then(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = imageRouter;
