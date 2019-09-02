import { LOAD_RESTAURANTS } from '../constants/ActionTypes';
import { fetchRestaurants } from '../lib/RestaurantServices';

export const loadRestaurants = (payload) => {
    return { type: LOAD_RESTAURANTS, payload };
}

export const getRestaurants = () => {
    return (dispatch) => {
        fetchRestaurants()
            .then((restaurants) => dispatch(loadRestaurants(restaurants)))
    };
}