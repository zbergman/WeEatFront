import React from "react";
import { Label, Rating } from "semantic-ui-react";
import PropTypes from "prop-types";
import styles from "./RenderedField.module.scss";

export const RenderedRatingField = ({
  input: { onChange },
  meta: { error },
  ...rest
}) => {
  const handleOnRate = (e, ratingObject) => onChange(ratingObject.rating);

  return (
    <div className={styles.renderedFieldContainer}>
      <Label basic>
        Rating
        <Label.Detail>
          <Rating
            {...rest}
            maxRating={5}
            clearable
            size="large"
            onRate={handleOnRate}
          />
        </Label.Detail>
      </Label>
      {error && (
        <Label basic pointing="left" color="red" className={styles.error}>
          {error}
        </Label>
      )}
    </div>
  );
};

RenderedRatingField.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object
};
