import React from "react";
import styles from "./AddRestaurant.module.scss";
import { saveRestaurant } from "../actions/index";
import { CUISINE_TYPES } from "../constants/Constants";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

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
  const { pristine, invalid, saveRestaurant, handleSubmit } = props;

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
        component="input"
      />
      <Field name="cuisine" id="cuisine" component="select">
        <option value="" disabled>
          Select cuisine
        </option>
        {CUISINE_TYPES.map(cuisine => (
          <option key={cuisine.key} value={cuisine.key}>
            {cuisine.text}
          </option>
        ))}
      </Field>
      <Field
        name="maxDeliveryTimeInMinutes"
        id="maxDeliveryTimeInMinutes"
        type="number"
        placeholder="Max delivery time in minutes"
        component="input"
      />
      <Field
        name="address"
        id="address"
        type="text"
        component="input"
        placeholder="Address"
      />
      <label>Accepts 10Bis</label>
      <Field name="is10Bis" id="is10Bis" type="checkbox" component="input" />
      <button type="submit" disabled={pristine || invalid}>
        Create
      </button>
    </form>
  );
};

AddRestaurant.propTypes = {
  saveRestaurant: PropTypes.func,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  invalid: PropTypes.bool
};

const mapStateToProps = state => state;
const mapDispatchToProps = { saveRestaurant };

export default reduxForm({
  form: "AddRestaurant",
  validate
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddRestaurant)
);
