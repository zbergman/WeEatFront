import { createSelector } from "reselect";

const getCurrentRestaurantById = state =>
  state.restaurants[state.currentRestaurantId];
const getRestaurants = state => Object.values(state.restaurants);
const getFiltersPredicates = state => Object.values(state.filters.predicates);

export const getCurrentRestaurant = createSelector(
  [getCurrentRestaurantById],
  currentRestaurantById => currentRestaurantById
);

export const getFilteredRestaurants = createSelector(
  [getRestaurants, getFiltersPredicates],
  (restaurants, predicateFunctions) =>
    restaurants.filter(restaurant =>
      predicateFunctions.every(predicateFunction =>
        predicateFunction(restaurant)
      )
    )
);
