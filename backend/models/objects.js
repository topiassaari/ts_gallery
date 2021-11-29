const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.MONGODB_URI;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to server");
  })
  .catch((error) => {
    console.log("error: ", error.message);
  });

const objSchema = new mongoose.Schema({
  val: { type: String },
});
objSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Object", objSchema);
