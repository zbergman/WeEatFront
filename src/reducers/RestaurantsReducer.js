import {
  LOAD_RESTAURANTS,
  ADD_RESTAURANT,
  APPLY_FILTER,
  REMOVE_FILTER,
  CLEAR_FILTERS,
  SET_CURRENT_RESTAURANT_ID,
  SET_MODAL_OPEN_STATE,
  LOAD_RESTAURANT_BY_ID
} from "../constants/ActionTypes";
import {
  MINIMAL_RATING,
  MAX_DELIVERY_TIME_IN_MINUTES,
  TEN_BIS,
  CUISINE
} from "../filters/FiltersNames";
import { predicates } from "../filters/Predicates";
import { handleActions } from "redux-actions";
import {
  IS_ADD_RESTAURANT_OPEN,
  IS_ADD_REVIEW_OPEN
} from "../constants/Modals";

const initialState = {
  restaurants: {},
  currentRestaurantId: undefined,
  filters: {
    predicates: {},
    values: {
      [CUISINE]: "",
      [MINIMAL_RATING]: 0,
      [MAX_DELIVERY_TIME_IN_MINUTES]: 120,
      [TEN_BIS]: false
    }
  },
  modals: {
    [IS_ADD_RESTAURANT_OPEN]: false,
    [IS_ADD_REVIEW_OPEN]: false
  }
};

export default handleActions(
  {
    [LOAD_RESTAURANTS]: (state, action) => ({
      ...state,
      restaurants: action.payload.reduce((memo, restaurant) => {
        memo[restaurant.id] = restaurant;
        return memo;
      }, {})
    }),

    [SET_CURRENT_RESTAURANT_ID]: (state, action) => ({
      ...state,
      currentRestaurantId: action.payload
    }),

    [ADD_RESTAURANT]: (state, action) => ({
      ...state,
      restaurants: { ...state.restaurants, [action.payload.id]: action.payload }
    }),

    [APPLY_FILTER]: (state, action) => ({
      ...state,
      filters: {
        ...state.filters,
        predicates: {
          ...state.filters.predicates,
          [action.payload.predicateName]: predicates[
            action.payload.predicateName
          ](action.payload.value)
        },
        values: {
          ...state.filters.values,
          [action.payload.predicateName]: action.payload.value
        }
      }
    }),

    [REMOVE_FILTER]: (state, action) => {
      const updatedFilters = { ...state.filters.predicates };
      delete updatedFilters[action.payload];

      return {
        ...state,
        filters: {
          predicates: updatedFilters,
          values: {
            ...state.filters.values,
            [action.payload]: initialState.filters.values[action.payload]
          }
        }
      };
    },

    [CLEAR_FILTERS]: state => ({
      ...state,
      filters: { ...initialState.filters }
    }),

    [SET_MODAL_OPEN_STATE]: (state, action) => ({
      ...state,
      modals: {
        ...state.modals,
        [action.payload.modalName]: action.payload.value
      }
    }),

    [LOAD_RESTAURANT_BY_ID]: (state, action) => ({
      ...state,
      restaurants: {
        ...state.restaurants,
        [action.payload.id]: action.payload
      }
    })
  },
  initialState
);
