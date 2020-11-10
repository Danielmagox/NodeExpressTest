const express = require("express");
const app = express();

const DEFAULT_FACES = 6;

const jsonResponse = (value, faces = DEFAULT_FACES) => ({
  min: 1,
  max: faces,
  value,
});

function trowDice(faces = 6) {
  return 1 + Math.floor(Math.random() * faces);
}

app.get("/dice/:num", (req, res) => {
  let faces = Number(req.params.num);
  let result = {
    min: 1,
    max: faces,
    result: trowDice(faces),
  };
  res.json(result);
});

app.get("/dice", (req, res) => {
  let result = {
    min: 1,
    max: 6,
    result: trowDice(),
  };
  res.json(result);
});

app.get("/", (req, res) => {
  res.json(["Hello", "World"]);
});

app.listen(3000, () => console.log("Listen on port 3000"));
