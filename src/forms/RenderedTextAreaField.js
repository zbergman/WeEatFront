import React from "react";
import { Label, TextArea } from "semantic-ui-react";
import PropTypes from "prop-types";

export const RenderedTextArea = ({ meta: { error, touched }, ...rest }) => (
  <div>
    <TextArea {...rest} />
    {error && touched && (
      <Label basic pointing="left" color="red">
        {error}
      </Label>
    )}
  </div>
);

RenderedTextArea.propTypes = {
  meta: PropTypes.object
};
