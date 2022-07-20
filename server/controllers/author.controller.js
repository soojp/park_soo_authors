const Author = require("../models/author.model");

module.exports = {
  getAuthors: (req, res) => {
    Author.find({})
      .then((authors) => {
        res.json(authors);
      })
      .catch((err) => {
        console.log("ERROR IN Getting Authors", err);
        res.status(400).json({
          message: "something went wrong in finding all author",
          error: err,
        });
      });
  },
  getAuthorById: (req, res) => {
    Author.findOne({ _id: req.params.id })
      .then((author) => {
        res.json(author);
      })
      .catch((err) => {
        console.log("ERROR IN Getting Author", err);
        res.status(400).json({
          message: "something went wrong in finding the author",
          error: err,
        });
      });
  },
  createAuthor: (req, res) => {
    Author.create(req.body)
      .then((newAuthor) => {
        res.status(201).json(newAuthor);
      })
      .catch((err) => {
        console.log("ERROR IN Creating Author", err);
        res.status(400).json({
          message: "something went wrong in creating author",
          error: err,
        });
      });
  },
  updateAuthor: (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((author) => {
        res.json(author);
      })
      .catch((err) => {
        console.log("ERROR IN Updating Author", err);
        res.status(400).json({
          message: "something went wrong in updating author",
          error: err,
        });
      });
  },
  deleteAuthor: (req, res) => {
    Author.deleteOne({ _id: req.params.id })
      .then((author) => {
        res.json(author);
      })
      .catch((err) => {
        console.log("ERROR IN Deleting Author", err);
        res.status(400).json({
          message: "something went wrong in deleting author",
          error: err,
        });
      });
  },
};
