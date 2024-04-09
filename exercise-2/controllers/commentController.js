"use strict";
let Models = require("../models"); // matches index.js

const getComments = (res) => {
  // finds all users
  Models.Post.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createComments = (data, res) => {
  // creates a new user using JSON data POSTed in request body
  console.log(data);
  new Models.Post(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateComments = (req, res) => {
  // updates the user matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);
  Models.Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteComments = (req, res) => {
  // deletes the user matching the ID from the param
  Models.Post.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getComments,
  createComments,
  updateComments,
  deleteComments,
};

// ++ Test updating and deleting a user using Postman
