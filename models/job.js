const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  minExp: {
    type: Number,
    required: true,
  },
  location: { type: String, required: true },
  company: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  applicant: {
    type: Number,
    default: 0,
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
