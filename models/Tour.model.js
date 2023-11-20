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
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
