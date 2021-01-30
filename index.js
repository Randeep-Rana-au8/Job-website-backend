const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Job = require("./models/job");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost/naukaridotcom", { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log("Connect to Db"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Health is ok");
});

app.post("/job", async (req, res) => {
  const job = new Job({
    name: req.body.name,
    vacancy: req.body.vacancy,
  });
  await job.save();
  res.send("Job added");
});

app.get("/jobs", (req, res) => {
  res.json([
    { jobs: "Software devloper", experience: "10years" },
    { jobs: "Software devloper", experience: "10years" },
    { jobs: "Software devloper", experience: "10years" },
  ]);
});

app.listen(3002, (err) => {
  if (err) throw err;
  console.log("App is running on port 3002");
});
