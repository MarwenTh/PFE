const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for User
const User = new Schema(
  {
    user_name: {
      type: String,
    },
    user_email: {
      type: String,
    },
    user_password: {
      type: String,
    },
    user_role: {
      type: String,
    },
    user_status: {
      type: String,
    },
    user_created: {
      type: Date,
      default: Date.now(),
    },
    user_updated: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("User", User);
