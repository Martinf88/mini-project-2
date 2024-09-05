import express, { Router, Request, Response } from "express";
import { movieReviews } from "../data/movieReviewData.js";

export const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send(movieReviews);
});
