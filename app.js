const express = require("express");
const app = express();
const userSchema = require("./userModal");
const userModal = require("./userModal");

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/create", async (req, res) => {
  var user = await userModal.create({
    name: "umar",
    userName: "umar_098",
    email: "ui737773@gmail.com",
  });
  res.send(user);
});

app.get("/update", async (req, res) => {
  let updateuser = await userModal.findOneAndUpdate(
    { userName: "umar_098" },
    { userName: "Ali_09" },
    { new: true }
  );
  res.send(updateuser);
});
app.get("/read", async (req, res) => {
  let readuser = await userModal.findOne({ userName: "Ali_09" });
  res.send(readuser);
});
app.get("/delete", async (req, res) => {
  let deluser = await userModal.findOneAndDelete({ userName: "Ali_09" });
  res.send(deluser);
});

app.listen(3000);
