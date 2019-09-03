import { LOAD_RESTAURANTS, SET_CURRENT_RESTAURANT } from '../constants/ActionTypes';
import { fetchRestaurants } from '../lib/RestaurantServices';

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