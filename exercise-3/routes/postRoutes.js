const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
// matches GET requests sent to /api/users

// (the prefix from server.js)
router.get('/', (req, res) => {
 Controllers.userController.getPosts(res);
})

// matches POST requests sent to /api/posts/create
router.post('/create', (req, res) => {
 Controllers.userController.createPost(req.body, res)
})

// matches PUT requests to /api/users/123 (stores 123 in id param)
router.put('/:id', (req, res) => {
    Controllers.userController.updatePost(req, res)
   })

// matches DELETE requests to /api/posts/123 (123 in id param)
router.delete('/:id', (req, res) => {
Controllers.userController.deletePost(req, res)
})
   
module.exports = router;
