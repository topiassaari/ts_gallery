const imageRouter = require("express").Router();
const Image = require("../models/image");
const middleware = require("../utils/middleware");

imageRouter.get("/", (req, res) => {
  Image.find({}).then((images) => {
    res.json(images.map((image) => image));
  });
});

imageRouter.post("/", middleware.userExtractor, (req, res) => {
  if (req.token === undefined) {
    res.status(401).json({ error: "Provide correct token" }).end();
  }
  const img = req.body;
  if (img === undefined || img.url === undefined) {
    res.status(400).json({ error: "img missing" }).end();
  }
  const newImg = new Image({
    url: img.url,
    desc: img.desc,
    year: img.year,
    dateAdded: new Date(),
  });
  newImg.save().then((saved) => {
    res.json(saved);
  });
});

imageRouter.put("/:id", middleware.userExtractor, async (req, res) => {
  if (req.token === undefined) {
    res.status(401).json({ error: "Provide correct token" }).end();
  }
  const img = req.body;
  if (img === undefined || img.url === undefined) {
    res.status(400).json({ error: "img missing" }).end();
  }
  const updated = await Image.findByIdAndUpdate(req.params.id, img, {
    new: true,
  });
  if (updated) {
    res.json(updated);
  } else {
    res.status(404).end();
  }
});

imageRouter.delete("/:id", middleware.userExtractor, async (req, res) => {
  if (req.token === undefined) {
    res.status(401).json({ error: "Provide correct token" }).end();
  }
  if (req.params.id) {
    Image.findByIdAndDelete(req.params.id).then(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = imageRouter;
