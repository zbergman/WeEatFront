import { createSelector } from "reselect";
import {
  IS_ADD_RESTAURANT_OPEN,
  IS_ADD_REVIEW_OPEN
} from "../constants/Modals";

const getAddRestaurantModalState = state =>
  state.restaurantReducer.modals[IS_ADD_RESTAURANT_OPEN];
const getAddReviewModalState = state =>
  state.restaurantReducer.modals[IS_ADD_REVIEW_OPEN];

export const isAddRestaurantModalOpen = createSelector(
  [getAddRestaurantModalState],
  modalState => modalState
);

export const isAddReviewModalOpen = createSelector(
  [getAddReviewModalState],
  modalState => modalState
);
