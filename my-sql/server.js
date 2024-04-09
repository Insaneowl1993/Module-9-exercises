const express = require("express")
const app = express()
let dbConnect = require("./dbConnect");

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MySQL application." });
  });
  app.use(express.json())
  let userRoutes = require("./routes/userRoutes");
  app.use("/api/users", userRoutes);

  // set port, listen for requests
  const PORT = process.env.PORT || 8081;
  app.listen(PORT, () => {
    console.log(`Server is running on port
  ${PORT}.`);
  });