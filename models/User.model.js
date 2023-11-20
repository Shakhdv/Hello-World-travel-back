const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  login: String,
  password: String,
  avatar: {
    type: String
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;