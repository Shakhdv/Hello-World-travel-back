const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  text: String,
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  tourId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Tour",
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
