import { createSelector } from "reselect";

const getFiltersValues = state => state.restaurantReducer.filters.values;

export const getRestaurantsFilters = createSelector(
  [getFiltersValues],
  filtersValues => filtersValues
);
