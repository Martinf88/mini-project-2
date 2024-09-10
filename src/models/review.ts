export interface Review {
  reviewId: number;
  movieId: number;
  rating: number;
  reviewerName: string;
}
export interface ReviewNoId {
  movieId: number;
  rating: number;
  reviewerName: string;
}
