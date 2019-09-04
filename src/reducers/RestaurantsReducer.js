import { LOAD_RESTAURANTS, SET_CURRENT_RESTAURANT, ADD_RESTAURANT, APPLY_FILTER, REMOVE_FILTER, CLEAR_FILTERS } from '../constants/ActionTypes';
import { MINIMAL_RATING, MAX_DELIVERY_TIME_IN_MINUTES, TEN_BIS, CUISINE } from '../filters/FiltersNames';
import { predicates } from '../filters/Predicates';

const initState = {
    restaurants: [],
    currentRestaurant: {},
    filters: {
        predicates: {},
        values: {
            [CUISINE]: '',
            [MINIMAL_RATING]: 0,
            [MAX_DELIVERY_TIME_IN_MINUTES]: 120,
            [TEN_BIS]: false
        }
    }
};

export default (state = initState, action) => {
    switch (action.type) {
        case LOAD_RESTAURANTS: 
            return { ...state, restaurants: action.payload };
        case SET_CURRENT_RESTAURANT:
            return { ...state, currentRestaurant: action.payload };
        case ADD_RESTAURANT:
            return { ...state, restaurants: state.restaurants.concat(action.payload) };
        case APPLY_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    predicates: {
                        ...state.filters.predicates,
                        [action.payload.predicateName]: predicates[action.payload.predicateName](action.payload.value)
                    },
                    values: {
                        ...state.filters.values,
                        [action.payload.predicateName]: action.payload.value
                    }
                }
            };
        case REMOVE_FILTER: {
            const updatedFilters = {...state.filters.predicates};
            delete updatedFilters[action.payload];

            return {
                ...state,
                filters: {
                    predicates: updatedFilters,
                    values: {
                        ...state.filters.values,
                        [action.payload]: initState.filters.values[action.payload]
                    }
                }
            };
        }
        case CLEAR_FILTERS:
            return {
                ...state,
                filters: {...initState.filters}
            };
        default:
            return state;
    }    
}