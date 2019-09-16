import React from "react";
import { saveRestaurant, setModalOpenState } from "../actions/index";
import { CUISINE_TYPES } from "../constants/Constants";
import { IS_ADD_RESTAURANT_OPEN } from "../constants/Modals";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { RenderedInputField } from "./RenderedInputField";
import { RenderedSelectionField } from "./RenderedSelectionField";
import { RenderedCheckboxField } from "./RenderedCheckboxField";
import { Button } from "semantic-ui-react";
import styles from "./AddRestaurant.module.scss";

const validate = val => {
  const errors = {};

  if (!val.name) {
    errors.name = "Required";
  }

  if (!val.cuisine || val.cuisine.length === 0) {
    errors.cuisine = "Required";
  }

  if (!val.maxDeliveryTimeInMinutes) {
    errors.maxDeliveryTimeInMinutes = "Required";
  } else if (val.maxDeliveryTimeInMinutes > 120) {
    errors.maxDeliveryTimeInMinutes = "Must be lower than 120";
  }

  if (!val.address) {
    errors.address = "Required";
  }

  return errors;
};

let AddRestaurant = props => {
  const { pristine, invalid, saveRestaurant, handleSubmit, setModalOpenState } = props;

  const handleCancel = () => {
    setModalOpenState(IS_ADD_RESTAURANT_OPEN, false);
  };

  return (
    <form
      onSubmit={handleSubmit(saveRestaurant)}
      className={styles.addRestaurantContainer}
    >
      <Field
        name="name"
        id="name"
        type="text"
        placeholder="Name"
        component={RenderedInputField}
      />
      <Field
        name="cuisine"
        id="cuisine"
        component={RenderedSelectionField}
        placeholder="Select cuisine"
        selection
        options={CUISINE_TYPES}
      />
      <Field
        name="maxDeliveryTimeInMinutes"
        id="maxDeliveryTimeInMinutes"
        type="number"
        placeholder="Max delivery time"
        component={RenderedInputField}
        labelPosition="right"
        label={{ basic: true, content: "Minutes" }}
      />
      <Field
        name="address"
        id="address"
        type="text"
        component={RenderedInputField}
        placeholder="Address"
      />
      <Field
        name="is10Bis"
        id="is10Bis"
        component={RenderedCheckboxField}
        label="Accepts 10Bis"
      />
      <div className={styles.buttonsContainer}>
        <Button className={styles.button} type="submit" disabled={pristine || invalid}>
          Create
        </Button>
        <Button className={styles.button} onClick={handleCancel}>Cancel</Button>
      </div>
    </form>
  );
};

AddRestaurant.propTypes = {
  saveRestaurant: PropTypes.func,
  setModalOpenState: PropTypes.func,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  invalid: PropTypes.bool
};

const mapStateToProps = state => state;
const mapDispatchToProps = { saveRestaurant, setModalOpenState };

export default reduxForm({
  form: "AddRestaurant",
  validate
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddRestaurant)
);
