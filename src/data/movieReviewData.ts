import { Review } from "../models/review.js";

export const movieReviews: Review[] = [
  { reviewId: 1, movieId: 1, rating: 9, reviewerName: "Lejonmanen" },
  { reviewId: 2, movieId: 1, rating: 8, reviewerName: "Beastman" },
  { reviewId: 3, movieId: 2, rating: 10, reviewerName: "Liam" },
  { reviewId: 4, movieId: 2, rating: 9, reviewerName: "Julius" },
  { reviewId: 5, movieId: 3, rating: 8, reviewerName: "Anton" },
  { reviewId: 6, movieId: 3, rating: 7, reviewerName: "Kenny" },
  { reviewId: 7, movieId: 4, rating: 9, reviewerName: "Sadaf" },
  { reviewId: 8, movieId: 4, rating: 8, reviewerName: "Felipe" },
  { reviewId: 9, movieId: 5, rating: 7, reviewerName: "Anders" },
  { reviewId: 10, movieId: 5, rating: 8, reviewerName: "Fedor" },
];
