const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    min: 1,
    max: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    min: 1,
    max: 50,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    min: 2,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  friends: {
    type: String,
    default: [],
  },
  hotTakes: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema);

module.exports = User;
