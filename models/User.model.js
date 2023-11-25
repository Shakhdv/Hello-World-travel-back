const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  login: String,
  password: String,
  avatar: String,
  admin: {
    type: Boolean,
    default: false,
  },
  tours: [
    {
      confirmed: {
        type: Boolean,
        default: false,
      },
      date: [String, String],
      tour: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Tour",
      },
    },
  ],
  excursions: [
    {
      confirmed: {
        type: Boolean,
        default: false,
      },
      excursion: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Excursion",
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
