import React from "react";
import { IS_ADD_REVIEW_OPEN } from "../constants/Modals";
import PropTypes from "prop-types";
import { toggleModalOpenState, saveReview } from "../actions/index";
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
    toggleModalOpenState,
    currentRestaurant,
    saveReview
  } = props;

  const handleAddReview = data => {
    try {
      saveReview({ ...data, restaurantId: currentRestaurant.id });
    } catch (e) {
      console.log(e);
    } finally {
      toggleModalOpenState(IS_ADD_REVIEW_OPEN, false);
    }
  };

  const handleCancel = () => {
    toggleModalOpenState(IS_ADD_REVIEW_OPEN, false);
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
  toggleModalOpenState: PropTypes.func,
  saveReview: PropTypes.func,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  invalid: PropTypes.bool,
  currentRestaurant: PropTypes.object
};

const mapStateToProps = state => ({
  currentRestaurant: getCurrentRestaurant(state)
});
const mapDispatchToProps = { toggleModalOpenState, saveReview };

export default reduxForm({
  form: "AddReview",
  validate: addReviewValidator
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddReview)
);
