const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
// matches GET requests sent to /api/users

// (the prefix from server.js)
router.get('/', (req, res) => {
 Controllers.userController.getLikes(res);
})

// matches POST requests sent to /api/likes/create
router.post('/create', (req, res) => {
 Controllers.userController.createLike(req.body, res)
})

// matches PUT requests to /api/likes/123 (stores 123 in id param)
router.put('/:id', (req, res) => {
    Controllers.userController.updateLike(req, res)
   })

// matches DELETE requests to /api/likes/123 (123 in id param)
router.delete('/:id', (req, res) => {
Controllers.userController.deleteLike(req, res)
})
   
module.exports = router;
