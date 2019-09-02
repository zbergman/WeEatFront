import { LOAD_RESTAURANTS } from '../constants/ActionTypes';

const initState = {
    restaurants: [],
    currentRestaurant: {}
};

export default (state = initState, action) => {
    switch (action.type) {
        case LOAD_RESTAURANTS: 
            return { ...state, restaurants: action.payload.restaurants };
        default:
            return state;
    }    
}