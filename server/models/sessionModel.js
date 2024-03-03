const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Session
const Session = new Schema(
  {
    session_name: {
      type: String,
    },
    session_description: {
      type: String,
    },
    session_price: {
      type: Number,
    },
  },
  {
    collection: "sessions",
  }
);

module.exports = mongoose.model("Session", Session);
