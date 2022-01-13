const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.MONGODB_URI;
var validate = require("mongoose-validator");
const uniqueValidator = require("mongoose-unique-validator");

var urlValidator = validate({
  validator: "isURL",
  message: "should be url",
});

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
  url: { type: String, required: true, validate: urlValidator, unique: true },
  desc: { type: String, required: true },
  year: { type: Number, required: true },
});
imageSchema.plugin(uniqueValidator);
imageSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Image", imageSchema);
