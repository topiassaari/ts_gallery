//imports
const Obj = require("./models/Objects");
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

morgan.token("content", function (req) {
  return JSON.stringify(req.body);
});

app.use(express.json());
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

app.get("/api/", (req, res) => {
  Obj.find({}).then((objs) => {
    res.json(objs.map((obj) => obj.toJSON()));
  });
});

app.get("/api/:id", (req, res, next) => {
  Obj.findById(req.params.id)
    .then((obj) => {
      res.json(obj.toJSON());
    })
    .catch((error) => next(error));
});

app.post("/api/", (req, res, next) => {
  const requestBody = req.body;
  console.log(requestBody.obj);
  const val = requestBody.obj;
  if (val === undefined) {
    return res.status(400).json({ error: "val missing" });
  }
  const obj = new Obj({
    val,
  });
  obj
    .save()
    .then((saved) => {
      res.json(saved.toJSON());
    })
    .catch((error) => next(error));
});

app.put("/api/:id", (req, res, next) => {
  const obj = {
    val: req.body.val,
  };

  Obj.findByIdAndUpdate(
    req.params.id,
    obj,
    { new: true },
    { runValidators: true, context: "query" }
  )
    .then((updated) => {
      res.json(updated.toJSON());
    })
    .catch((error) => next(error));
});

app.delete("/api/:id", (req, res, next) => {
  Obj.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch((error) => next(error));
});

app.use(errorHandler);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
