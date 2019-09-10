import { createSelector } from "reselect";

const getReviewsOfCurrentRestaurant = state => state.currentRestaurant.reviews;

export const getReviews = createSelector(
  [getReviewsOfCurrentRestaurant],
  reviewsOfCurrentRestaurant => reviewsOfCurrentRestaurant
);
