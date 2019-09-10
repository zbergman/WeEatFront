import {
  LOAD_RESTAURANTS,
  SET_CURRENT_RESTAURANT,
  ADD_RESTAURANT
} from "../constants/ActionTypes";
import { fetchRestaurants, createRestaurant } from "../lib/RestaurantServices";
import { createAction } from "redux-actions";

export const loadRestaurants = createAction(LOAD_RESTAURANTS);
export const setCurrentRestaurant = createAction(SET_CURRENT_RESTAURANT);
export const addRestaurant = createAction(ADD_RESTAURANT);

export const getRestaurants = () =>
    dispatch => fetchRestaurants()
      .then(restaurants => dispatch(loadRestaurants(restaurants)));

export const saveRestaurant = restaurant =>
  dispatch => createRestaurant(restaurant)
    .then(savedRestaurant => dispatch(addRestaurant(savedRestaurant)));
