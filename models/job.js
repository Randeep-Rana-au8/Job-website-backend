const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  name: String,
  vacancy: Number,
});

const Jobs = mongoose.model("Job", jobSchema);

module.exports = Jobs;
