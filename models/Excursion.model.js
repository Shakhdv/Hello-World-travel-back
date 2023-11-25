const mongoose = require("mongoose");

const excursionSchema = mongoose.Schema({
  name: String,
  descr: String,
  price: Number,
  image: String,
  rating: Number,
  moreDescr: String,
});

const Excursion = mongoose.model("Excursion", excursionSchema);

module.exports = Excursion;
