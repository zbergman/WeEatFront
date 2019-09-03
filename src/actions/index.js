import { LOAD_RESTAURANTS, SET_CURRENT_RESTAURANT, ADD_RESTAURANT } from '../constants/ActionTypes';
import { fetchRestaurants, createRestaurant } from '../lib/RestaurantServices';

export const loadRestaurants = (payload) => {
    return { type: LOAD_RESTAURANTS, payload };
};

export const getRestaurants = () => {
    return (dispatch) => {
        fetchRestaurants()
            .then((restaurants) => dispatch(loadRestaurants(restaurants)))
    };
};

export const setCurrentRestaurant = (payload) => {
    return { type: SET_CURRENT_RESTAURANT, payload };
};

export const saveRestaurant = (restaurant) => {
    return (dispatch) => {
        createRestaurant(restaurant)
            .then((savedRestaurant) => dispatch(addRestaurant(savedRestaurant)))
    };
};

export const addRestaurant = (payload) => {
    return { type: ADD_RESTAURANT, payload };
}