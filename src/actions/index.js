import {
  LOAD_RESTAURANTS,
  SET_CURRENT_RESTAURANT,
  ADD_RESTAURANT,
  APPLY_FILTER,
  REMOVE_FILTER,
  CLEAR_FILTERS
} from "../constants/ActionTypes";
import { fetchRestaurants, createRestaurant } from "../lib/RestaurantServices";
import { createAction } from "redux-actions";

export const loadRestaurants = createAction(LOAD_RESTAURANTS);
export const setCurrentRestaurant = createAction(SET_CURRENT_RESTAURANT);
export const addRestaurant = createAction(ADD_RESTAURANT);
export const clearFilters = createAction(CLEAR_FILTERS);
export const removeFilter = createAction(REMOVE_FILTER);

export const getRestaurants = () => dispatch =>
  fetchRestaurants().then(restaurants =>
    dispatch(loadRestaurants(restaurants))
  );

export const applyFilter = (predicateName, value) => {
  return {
    type: APPLY_FILTER,
    payload: { predicateName: predicateName, value: value }
  };
};

export const saveRestaurant = restaurant => dispatch =>
  createRestaurant(restaurant).then(savedRestaurant =>
    dispatch(addRestaurant(savedRestaurant))
  );
