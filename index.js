const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Job = require("./models/job");
const bodyParser = require("body-parser");
const user = require("./routes/user");
const job = require("./routes/jobs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/user", user);
app.use("/api", job);

mongoose
  .connect("mongodb://localhost/naukaridotcom", { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log("Connect to Db"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Health is ok");
});

app.listen(3002, (err) => {
  if (err) throw err;
  console.log("App is running on port 3002");
});
