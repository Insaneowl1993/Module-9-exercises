const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require("./dbConnect");

// parse requests of content-type -application/json
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
let likeRoutes = require("./routes/likeRoutes");
app.use("/api/likes", likeRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

let commentRoutes = require("./routes/commentRoutes");
app.use("/api/comments", commentRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

let postRoutes = require("./routes/postRoutes");
app.use("/api/posts",postRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});