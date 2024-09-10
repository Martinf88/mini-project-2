import express, { Router, Request, Response } from "express";
import { movieReviews } from "../data/movieReviewData.js";
import { Review, ReviewNoId } from "../models/review.js";
import { isReviewNoId } from "../data/validation.js";

export const router: Router = express.Router();

//Get endpoints
router.get("/", (req: Request, res: Response) => {
  res.send(movieReviews);
});

// POST endpoint
router.post("/", (req: Request<ReviewNoId>, res: Response) => {
  const newReview: ReviewNoId = req.body;
  const validationResult = isReviewNoId(newReview);

  if (!validationResult.valid) {
    return res.status(400).send({ error: validationResult.error });
  }
  const newId = movieReviews.length + 1;
  const newReviewWithId: Review = { reviewId: newId, ...newReview };

  movieReviews.push(newReviewWithId);

  res.status(201).send(newReviewWithId);
});

//DELETE endpoints
router.delete("/:id", (req: Request, res: Response) => {
  const reviewId = parseInt(req.params.id, 10);
  const reviewIndex = movieReviews.findIndex(
    (review) => review.reviewId === reviewId
  );
  if (reviewIndex === -1) {
    return res.status(404).send({ error: "Movie Not Found" });
  }

  movieReviews.splice(reviewIndex, 1);

  res.status(200).send({ message: "Review successfully deleted" });
});

//PUT endpoints
router.put("/:id", (req: Request, res: Response) => {
  const reviewId = parseInt(req.params.id, 10);
  const reviewIndex = movieReviews.findIndex(
    (review) => review.reviewId === reviewId
  );
  if (reviewIndex === -1) {
    return res.status(404).send({ error: "Movie Not Found" });
  }

  const updatedReview: ReviewNoId = req.body;
  //Validation
  const validationResult = isReviewNoId(updatedReview);
  if (!validationResult.valid) {
  }

  const reviewWithId: Review = { reviewId: reviewId, ...updatedReview };
  movieReviews[reviewIndex] = reviewWithId;

  res.status(200).send(reviewWithId);
});
