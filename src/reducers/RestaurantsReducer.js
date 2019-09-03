import { LOAD_RESTAURANTS, SET_CURRENT_RESTAURANT } from '../constants/ActionTypes';

const initState = {
    restaurants: [],
    currentRestaurant: {}
};

export default (state = initState, action) => {
    switch (action.type) {
        case LOAD_RESTAURANTS: 
            return { ...state, restaurants: action.payload.restaurants };
        case SET_CURRENT_RESTAURANT:
            return { ...state, currentRestaurant: action.payload };
        default:
            return state;
    }    
}