const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Health is ok");
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
