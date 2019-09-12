import {
  LOAD_RESTAURANTS,
  SET_CURRENT_RESTAURANT_ID,
  ADD_RESTAURANT
} from "../constants/ActionTypes";
import { fetchRestaurants, createRestaurant } from "../lib/RestaurantServices";
import { createAction } from "redux-actions";

export const loadRestaurants = createAction(LOAD_RESTAURANTS);
export const setCurrentRestaurantId = createAction(SET_CURRENT_RESTAURANT_ID);
export const addRestaurant = createAction(ADD_RESTAURANT);

export const getRestaurants = () => async dispatch => {
  const restaurants = await fetchRestaurants();
  return dispatch(loadRestaurants(restaurants));
};

export const saveRestaurant = restaurant => dispatch =>
  createRestaurant(restaurant).then(savedRestaurant =>
    dispatch(addRestaurant(savedRestaurant))
  );
