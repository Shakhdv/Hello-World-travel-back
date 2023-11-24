const mongoose = require("mongoose");

const guideSchema = mongoose.Schema({
  image: String,
  name: String,
  job: String,
  description: String,
});

const Guide = mongoose.model("guideSchema", guideSchema);

module.exports = Guide;
