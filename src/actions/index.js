import { LOAD_RESTAURANTS, SET_CURRENT_RESTAURANT, ADD_RESTAURANT, APPLY_FILTER, REMOVE_FILTER, CLEAR_FILTERS } from '../constants/ActionTypes';
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
};

export const applyFilter = (predicateName, value) => {
    return { type: APPLY_FILTER, payload: { predicateName: predicateName, value: value } };
};

export const removeFilter = (predicateName) => {
    return { type: REMOVE_FILTER, payload: predicateName };
};

export const clearFilters = () => {
    return {type: CLEAR_FILTERS};
};