import React from "react";
import { IS_ADD_REVIEW_OPEN } from "../constants/Modals";
import PropTypes from "prop-types";
import { setModalOpenState, saveReview, getRestaurantById } from "../actions/index";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { RenderedInputField } from "./RenderedInputField";
import { Button } from "semantic-ui-react";
import styles from "./AddReview.module.scss";
import { addReviewValidator } from "./Validators";
import { RenderedRatingField } from "./RenderedRatingField";
import { RenderedTextAreaField } from "./RenderedTextAreaField";
import { getCurrentRestaurant } from "../selectors/RestaurantSelectors";

const AddReview = props => {
  const {
    pristine,
    invalid,
    handleSubmit,
    setModalOpenState,
    currentRestaurant,
    saveReview,
    getRestaurantById
  } = props;

  const handleAddReview = data => {
    try {
      saveReview({ ...data, restaurantId: currentRestaurant.id });
    } catch (e) {
      console.log(e);
    } finally {
      setModalOpenState(IS_ADD_REVIEW_OPEN, false);
    }
  };

  const handleCancel = () => {
    setModalOpenState(IS_ADD_REVIEW_OPEN, false);
  };

  return (
    <form
      onSubmit={handleSubmit(handleAddReview)}
      className={styles.addReviewContainer}
    >
      <Field
        name="reviewerName"
        id="reviewerName"
        type="text"
        component={RenderedInputField}
        label={{ basic: true, content: "Full name" }}
      />
      <Field name="rating" id="rating" component={RenderedRatingField} />
      <Field
        name="text"
        id="text"
        type="text"
        placeholder="Type your review..."
        component={RenderedTextAreaField}
        className={styles.text}
      />
      <div className={styles.buttonsContainer}>
        <Button
          type="submit"
          disabled={pristine || invalid}
          className={styles.button}
        >
          Add
        </Button>
        <Button onClick={handleCancel} className={styles.button}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

AddReview.propTypes = {
  setModalOpenState: PropTypes.func,
  saveReview: PropTypes.func,
  getRestaurantById: PropTypes.func,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  invalid: PropTypes.bool,
  currentRestaurant: PropTypes.object
};

const mapStateToProps = state => ({
  currentRestaurant: getCurrentRestaurant(state)
});
const mapDispatchToProps = { setModalOpenState, saveReview, getRestaurantById };

export default reduxForm({
  form: "AddReview",
  validate: addReviewValidator
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddReview)
);
