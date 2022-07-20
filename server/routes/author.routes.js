const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
  app.get("/api/author", AuthorController.getAuthors);
  app.get("/api/author/:id", AuthorController.getAuthorById);
  app.post("/api/author", AuthorController.createAuthor);
  app.put("/api/author/:id", AuthorController.updateAuthor);
  app.delete("/api/author/:id", AuthorController.deleteAuthor);
};
