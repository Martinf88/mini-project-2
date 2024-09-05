import express, { Router, Request, Response } from "express";
import { movies } from "../data/moviesData.js";
import { MovieNoId } from "../models/movie.js";
import { isMovieNoId } from "../data/validation.js";
import { Movie } from "../models/movie.js";

export const router: Router = express.Router();

// GET endpoint
router.get("/", (req: Request, res: Response) => {
  res.send(movies);
});

// POST endpoint
router.post("/", (req: Request<MovieNoId>, res: Response) => {
  const newMovie: MovieNoId = req.body;
  const validationResult = isMovieNoId(newMovie);

  if (!validationResult.valid) {
    return res.status(400).send({ error: validationResult.error }); // Bad Request
  }

  const newId = movies.length + 1;
  const newMovieWithId: Movie = { id: newId, ...newMovie };

  movies.push(newMovieWithId);

  res.status(201).send(newMovieWithId);
});

// DELETE endpoint to remove a movie by its ID
router.delete("/:id", (req: Request, res: Response) => {
  const movieId = parseInt(req.params.id, 10);
  const movieIndex = movies.findIndex((movie) => movie.id === movieId);

  if (movieIndex === -1) {
    return res.status(404).send({ error: "Movie Not Found" });
  }

  movies.splice(movieIndex, 1);

  res.status(200).send({ message: "Movie deleted successfully" });
});

//TODO: PUT endpoint
