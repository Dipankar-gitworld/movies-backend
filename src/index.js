const express  = require ("express");

const movieController = require ("./controllers/movie.controller");

const app = express();
app.use(express.json());

app.use("/users", movieController);


module.exports = app;