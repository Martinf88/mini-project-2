import Joi from "joi";

import { MovieNoId } from "../models/movie.js";
import { ReviewNoId } from "../models/review.js";

const movieNoIdSchema = Joi.object({
  title: Joi.string().required().min(1),
  releaseYear: Joi.number().required().min(1986).max(3000),
  imageUrl: Joi.string().required().min(1),
});
const reviewNoIdSchema = Joi.object({
  rating: Joi.number().required().min(0).max(10),
  reviewerName: Joi.string().required().min(1),
});

export function isMovieNoId(data: MovieNoId): {
  valid: boolean;
  error?: string;
} {
  let result = movieNoIdSchema.validate(data);
  return result.error
    ? { valid: false, error: result.error.details[0].message }
    : { valid: true };
}

export function isReviewNoId(data: ReviewNoId): boolean {
  let result = reviewNoIdSchema.validate(data);
  return !result.error;
}
