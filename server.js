const express = require("express");
const app = express();

const usuarios = [{ name: "Pepe" }, { name: "Juan" }];
const users = [
  { name: "Pepe", id: 0 },
  { name: "Juan", id: 1 },
];

app.get("/test", (req, res) => {
  usuarios[0].name = "Daniel";
  res.json(usuarios[0]);
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find((user) => user.id === userId);
  res.json(user);
});

app.get("/", (req, res) => {
  res.json(usuarios[0]);
});

app.listen(3000, () => console.log("Listen on port 3000"));
