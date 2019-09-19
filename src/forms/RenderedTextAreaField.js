import React from "react";
import { Label, TextArea } from "semantic-ui-react";
import PropTypes from "prop-types";
import styles from "./RenderedField.module.scss";

export const RenderedTextAreaField = ({
  required,
  input,
  meta: { touched, error },
  ...rest
}) => (
  <div className={styles.renderedFieldContainer}>
    <TextArea required={required} {...input} {...rest} />
    {error && touched && (
      <Label basic pointing="left" color="red" className={styles.error}>
        {error}
      </Label>
    )}
  </div>
);

RenderedTextAreaField.propTypes = {
  meta: PropTypes.object,
  required: PropTypes.bool,
  input: PropTypes.object
};
