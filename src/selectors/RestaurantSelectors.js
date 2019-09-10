import { createSelector } from "reselect";

const getCurrentRestaurantById = state =>
  state.restaurants.filter(
    restaurant => restaurant.id === state.currentRestaurantId
  ).pop();

export const getCurrentRestaurant = createSelector(
  [getCurrentRestaurantById],
  currentRestaurantById => currentRestaurantById
);
