import React from "react";
import { Checkbox } from "semantic-ui-react";
import PropTypes from "prop-types";
import styles from "./RenderedField.module.scss";

export const RenderedCheckboxField = ({
  input: { value, onChange },
  label
}) => {
  const handleChecked = (e, { checked }) => onChange(checked);

  return (
    <Checkbox
      className={styles.renderedFieldContainer}
      label={label}
      checked={value ? true : false}
      onChange={handleChecked}
    />
  );
};

RenderedCheckboxField.propTypes = {
  input: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string
};
