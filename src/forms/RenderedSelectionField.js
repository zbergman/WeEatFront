import React from "react";
import { Dropdown, Label } from "semantic-ui-react";
import PropTypes from "prop-types";
import styles from "./RenderedField.module.scss";

export const RenderedSelectionField = ({
  input: { value, onChange },
  meta: { error, touched },
  ...rest
}) => (
  <div className={styles.renderedFieldContainer}>
    <Dropdown
      size="small"
      {...rest}
      value={value}
      onChange={(param, data) => onChange(data.value)}
    />
    {error && touched && (
      <Label basic pointing="left" color="red" className={styles.error}>
        {error}
      </Label>
    )}
  </div>
);

RenderedSelectionField.propTypes = {
  input: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
  meta: PropTypes.object
};
