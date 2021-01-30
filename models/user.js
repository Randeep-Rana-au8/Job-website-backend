const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    default: "Less than a year",
  },
  skills: {
    type: Array,
    required: true,
  },
  expectedSalary: {
    type: String,
    required: true,
  },
  prefferedLocation: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("User", userSchema);

module.exports = Users;
