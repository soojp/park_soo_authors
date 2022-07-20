const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      minLength: [3, "name must be longer than 3 characters"],
      required: [true, "author name is required"],
    },
  },
  { timestamps: true }
);

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
