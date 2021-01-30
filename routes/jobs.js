const express = require("express");
const Job = require("../models/job");
const app = express();

app.post("/job", async (req, res) => {
  const job = await new Job({
    name: req.body.name,
    minExp: req.body.minExp,
    location: req.body.location,
    salary: req.body.salary,
    skills: req.body.skills,
    company: req.body.company,
    active: req.body.active,
  });

  await job.save();
  res.send("Job Registered");
});

app.get("/jobs", async (req, res) => {
  const jobs = await Job.find({});
  res.send(jobs);
});

module.exports = app;
