const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Project
const Project = new Schema(
  {
    project_name: {
      type: String,
    },
    project_description: {
      type: String,
    },
    project_price: {
      type: Number,
    },
  },
  {
    collection: "projects",
  }
);

module.exports = mongoose.model("Project", Project);
