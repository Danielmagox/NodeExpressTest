const express = require("express");
const app = express();
const users = [];

app.use(express.json());

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = Math.random();
  users.push(newUser);
  res.json(newUser);
});

app.get("/");

app.listen(3000, () => console.log("Listen on port 3000"));
