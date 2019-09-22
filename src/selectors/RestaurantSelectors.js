import { createSelector } from "reselect";
import { filterByPredicates } from "../utils/Utilities";

const getCurrentRestaurantById = state =>
  state.restaurantReducer.restaurants[
    state.restaurantReducer.currentRestaurantId
  ];
const getRestaurants = state =>
  Object.values(state.restaurantReducer.restaurants);
const getFiltersPredicates = state =>
  Object.values(state.restaurantReducer.filters.predicates);

export const getCurrentRestaurant = createSelector(
  [getCurrentRestaurantById],
  currentRestaurantById => currentRestaurantById
);

export const getFilteredRestaurants = createSelector(
  [getRestaurants, getFiltersPredicates],
  (restaurants, predicateFunctions) =>
    filterByPredicates(restaurants, predicateFunctions)
);
