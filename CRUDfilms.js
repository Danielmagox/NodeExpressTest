const express = require("express");
const app = express();

app.use(express.json());

const moviesDB = [
  { id: 1, name: "Taxi Driver", categoria: "Cine Negro", like: false },
  { id: 2, name: "El Padrino", categoria: "Drama", like: true },
  { id: 3, name: "GoodFellas", categoria: "Mafia", like: true },
  { id: 4, name: "American Pie", categoria: "Comedia", like: true },
];
// Esto se hace con el PostMan
//creamos ID para las peliculas
app.post("/movie", (req, res) => {
  let movie = req.body;
  movie.id = Math.random();
  moviesDB.push(movie);
  res.json(movie);
});

///////likes
app.get("/movie/like/:id", (req, res) => {
  let id = Number(req.params.id);
  let movieEditIndex = moviesDB.findIndex((movie) => movie.id === id);
  res.json(moviesDB[movieEditIndex].like);
});

app.get("/movie/like", (req, res) => {
  let likedDDBB = moviesDB.filter((movie) => movie.like);
  res.json(likedDDBB);
});

app.get("/movie/unlike", (req, res) => {
  let likedDDBB = moviesDB.filter((movie) => !movie.like);
  res.json(likedDDBB);
});

app.put("/movie/like/:id", (req, res) => {
  let id = Number(req.params.id);
  let movieEditIndex = moviesDB.findIndex((movie) => movie.id === id);
  moviesDB[movieEditIndex].like = !moviesDB[movieEditIndex].like;
  res.json(moviesDB[movieEditIndex]);
});

//Cambia el nombre de la pelicula
app.put("/movie/:id", (req, res) => {
  let id = Number(req.params.id);
  let movieEditIndex = moviesDB.findIndex((movie) => movie.id === id);
  moviesDB[movieEditIndex].name = req.body.name;
  res.json(moviesDB[movieEditIndex]);
});
//Muestra solo 1 pelicula
app.get("/movie/:id", (req, res) => {
  console.log("Estoy aqui");
  let id = Number(req.params.id);
  let movieEdit = moviesDB.find((movie) => movie.id === id);
  res.json(movieEdit);
});
//Borra 1 pelicula
app.delete("/movie/:id", (req, res) => {
  let id = Number(req.params.id);
  let movieEditIndex = moviesDB.findIndex((movie) => movie.id === id);
  res.json(moviesDB.splice(movieEditIndex, 1));
});

app.get("/movie", (req, res) => {
  res.json(moviesDB);
});

app.get("/", (req, res) => {
  res.json();
});

app.listen(3000, () => console.log("Listen on port 3000"));
