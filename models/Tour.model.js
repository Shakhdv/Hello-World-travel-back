const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
  name: String,
  regionName: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Region",
  },
  descr: String,
  image: String,
  price: Number,
  categoryName: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
  rating: Number,
  firstDay: String,
  secondDay: String,
  thirdDay: String,
  firstDayDescr: String,
  secondDayDescr: String,
  thirdDayDescr: String,
  transport: String,
  length: Number,
  firstDayImage: String,
  secondDayImage: String,
  thirdDayImage: String
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
