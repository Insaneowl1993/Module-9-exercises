let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");
// index.js

// Adds a GET route to return all users
router.get("/", (req, res) => {
  Controllers.likeController.getLikes(res);
});

// Adds a POST route to create a new user
router.post("/create", (req, res) => {
  Controllers.likeController.createLike(req.body, res);
});

// Adds a PUT route to return a single user by ID
router.put("/:id", (req, res) => {
  Controllers.likeController.updateLike(req, res);
});

// Adds a DELETE route to delete a single user by ID
router.delete("/:id", (req, res) => {
  Controllers.likeController.deleteLike(req, res);
});

module.exports = router;