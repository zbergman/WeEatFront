import React from "react";
import { Input, Label } from "semantic-ui-react";
import PropTypes from "prop-types";
import styles from "./RenderedField.module.scss";

export const RenderedInputField = ({ meta: { error, touched }, ...rest }) => (
  <div className={styles.renderedFieldContainer}>
    <Input {...rest} size="small" />
    {error && touched && (
      <Label basic pointing="left" color="red">
        {error}
      </Label>
    )}
  </div>
);

RenderedInputField.propTypes = {
  meta: PropTypes.object
};
