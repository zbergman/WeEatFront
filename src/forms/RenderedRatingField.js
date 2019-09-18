import React from "react";
import { Rating } from "semantic-ui-react";
import PropTypes from "prop-types";

export const RenderedRatingField = ({
  input: { value, onChange },
  ...rest
}) => (
  <Rating
    {...rest}
    rating={value}
    maxRating={5}
    clearable
    size="large"
    onRate={onChange}
  />
);

RenderedRatingField.propTypes = {
  input: PropTypes.object
};
