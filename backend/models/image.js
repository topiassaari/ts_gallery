const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.MONGODB_URI;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log("error: ", error.message);
  });

const imageSchema = new mongoose.Schema({
  url: { type: String },
  desc: { type: String },
  year: { type: Number },
});
imageSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Image", imageSchema);
