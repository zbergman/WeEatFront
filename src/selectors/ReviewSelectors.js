import { createSelector } from "reselect";
import { getCurrentRestaurant } from "./RestaurantSelectors";

export const getReviews = createSelector(
  [getCurrentRestaurant],
  currentRestaurant => currentRestaurant && currentRestaurant.reviews
);
