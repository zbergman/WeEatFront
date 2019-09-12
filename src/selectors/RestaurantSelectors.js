import { createSelector } from "reselect";

const getCurrentRestaurantById = state =>
  state.restaurants[state.currentRestaurantId];

export const getCurrentRestaurant = createSelector(
  [getCurrentRestaurantById],
  currentRestaurantById => currentRestaurantById
);
