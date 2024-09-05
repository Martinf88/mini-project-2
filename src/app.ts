import express from "express";
import logger from "./middlewares/logger.js";
import { router as moviesRoutes } from "./routes/movies.js";
import { router as movieReviewsRoutes } from "./routes/reviews.js";

const app = express();

//Middleware
app.use(express.json());
app.use(logger);

//Routes
// TODO: /movies /reviews /top-movies
app.use("/movies", moviesRoutes);
app.use("/reviews", movieReviewsRoutes);
// app.use("/reviews", router);
// app.use("/top-movies", router);

export default app;
