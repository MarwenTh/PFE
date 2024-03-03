const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const userRoute = require("./routes/userRoute");
const projectRoute = require("./routes/projectRoute");

app.use(cors());
app.use(express.json());

const mongoURL = "mongodb://0.0.0.0:27017/pfeProject";

mongoose.connect(mongoURL);
const connection = mongoose.connection;
connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});
connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

app.use("/api/users", userRoute);
app.use("/api/projects", projectRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
