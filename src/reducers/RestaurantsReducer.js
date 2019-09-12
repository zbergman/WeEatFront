import {
  LOAD_RESTAURANTS,
  SET_CURRENT_RESTAURANT_ID,
  ADD_RESTAURANT
} from "../constants/ActionTypes";
import { handleActions } from "redux-actions";

const initialState = {
  restaurants: {},
  currentRestaurant: {},
  currentRestaurantId: undefined,
  filters: {}
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
    })
  },
  initialState
);
