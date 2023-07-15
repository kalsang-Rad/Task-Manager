require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();

const taskRoutes = require("./routes/taskRoutes");

app.use(express.json());
app.use("/api/task", taskRoutes);

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening on port " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
