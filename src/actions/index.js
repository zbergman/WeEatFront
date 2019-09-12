import {
  LOAD_RESTAURANTS,
  ADD_RESTAURANT,
  APPLY_FILTER,
  REMOVE_FILTER,
  CLEAR_FILTERS,
  SET_CURRENT_RESTAURANT_ID
} from "../constants/ActionTypes";
import { fetchRestaurants, createRestaurant } from "../lib/RestaurantServices";
import { createAction } from "redux-actions";

export const loadRestaurants = createAction(LOAD_RESTAURANTS);
export const setCurrentRestaurantId = createAction(SET_CURRENT_RESTAURANT_ID);
export const addRestaurant = createAction(ADD_RESTAURANT);
export const clearFilters = createAction(CLEAR_FILTERS);
export const removeFilter = createAction(REMOVE_FILTER);
export const applyFilter = createAction(APPLY_FILTER, (predicateName, value) => ({predicateName, value}));

export const getRestaurants = () => async dispatch => {
  const restaurants = await fetchRestaurants();
  return dispatch(loadRestaurants(restaurants));
};

export const saveRestaurant = restaurant => async dispatch => {
  const savedRestaurant = await createRestaurant(restaurant);
  return dispatch(addRestaurant(savedRestaurant));
};
