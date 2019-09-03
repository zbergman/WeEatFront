import { LOAD_RESTAURANTS, SET_CURRENT_RESTAURANT, ADD_RESTAURANT } from '../constants/ActionTypes';

const initState = {
    restaurants: [],
    currentRestaurant: {},
    filters: {}
};

export default (state = initState, action) => {
    switch (action.type) {
        case LOAD_RESTAURANTS: 
            return { ...state, restaurants: action.payload };
        case SET_CURRENT_RESTAURANT:
            return { ...state, currentRestaurant: action.payload };
        case ADD_RESTAURANT:
            return { ...state, restaurants: state.restaurants.concat(action.payload) };
        default:
            return state;
    }    
}