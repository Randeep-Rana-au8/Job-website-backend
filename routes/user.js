const User = require("../models/user");
const express = require("express");
const app = express();

app.post("/signup", async (req, res) => {
  const user = await new User({
    name: req.body.name,
    experience: req.body.experience,
    prefferedLocation: req.body.prefferedLocation,
    expectedSalary: req.body.expectedSalary,
    profilePic: req.body.name,
    resume: req.body.resume,
    skills: req.body.skills,
    email: req.body.email,
    password: req.body.password,
  });

  await user.save();
  res.send("You are signed up please login now");
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  console.log(user);
  if (!user) return res.status(400).send("Invalid Email id or password!");
  const validPass = user.password === req.body.password;
  if (!validPass) return res.status(400).send("Invalid Email id or password!");
  console.log(validPass);
  res.send("Login successful");
});

module.exports = app;
