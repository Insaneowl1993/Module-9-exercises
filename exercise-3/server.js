const express = require("express")
const app = express()
let dbConnect = require("./dbConnect");

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MySQL application." });
  });
  app.use(express.json())
  let userRoutes = require("./routes/postRoutes");
  app.use("/api/users", userRoutes);

  app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MySQL application." });
  });
  app.use(express.json())
  let userRoutes = require("./routes/commentsRoutes");
  app.use("/api/comments", userRoutes);

  app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MySQL application." });
  });
  app.use(express.json())
  let userRoutes = require("./routes/likeRoutes");
  app.use("/api/likes", userRoutes);


  // set port, listen for requests
  const PORT = process.env.PORT || 8081;
  app.listen(PORT, () => {
    console.log(`Server is running on port
  ${PORT}.`);
  });