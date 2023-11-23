const mongoose = require('mongoose')

const regionSchema = mongoose.Schema({
  regionName: String,
});

const Region = mongoose.model("Region", regionSchema);

module.exports = Region;