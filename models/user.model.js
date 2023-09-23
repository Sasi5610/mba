const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minLength: 10,
  },
  userType: {
    type: String,
    required: true,
    default: "COUSTMER",
  },
  userStatus: {
    type: String,
    required: true,
    default: "PENDING",
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
});

// how to export the model
const User = mongoose.model("User", userSchema);

module.exports = User;
