import React from "react";
import { IS_ADD_REVIEW_OPEN } from "../constants/Modals";
import PropTypes from "prop-types";
import { setModalOpenState } from "../actions/index";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { RenderedInputField } from "./RenderedInputField";
import { Button } from "semantic-ui-react";
import styles from "./AddReview.module.scss";
import { addReviewValidator } from "./Validators";
import { RenderedRatingField } from "./RenderedRatingField";
// import { RenderedTextArea } from "./RenderedTextAreaField";
import { TextAreaField } from "react-semantic-redux-form";

const AddReview = props => {
  const { pristine, invalid, handleSubmit, setModalOpenState } = props;

  const handleAddReview = data => {};

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
        placeholder="Full name"
      />
      <Field name="rating" id="rating" component={RenderedRatingField} />
      <Field
        name="text"
        id="text"
        type="text"
        placeholder="Type your review..."
        component={TextAreaField}
      />
      <Button type="submit" disabled={pristine || invalid}>
        Add
      </Button>
      <Button onClick={handleCancel}>Cancel</Button>
    </form>
  );
};

AddReview.propTypes = {
  setModalOpenState: PropTypes.func,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  invalid: PropTypes.bool
};

const mapStateToProps = state => state;
const mapDispatchToProps = { setModalOpenState };

export default reduxForm({
  form: "AddReview",
  validate: addReviewValidator
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddReview)
);
