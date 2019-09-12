import React from "react";
import PropTypes from "prop-types";
import { Rating } from "semantic-ui-react";
import styles from "./ReviewCard.module.scss";

export const ReviewCard = props => {
  return (
    <div className={styles.reviewCardContainer}>
      <div>
        <div className={styles.reviewCardTitle}>{props.reviewerName}</div>
        <Rating
          defaultRating={Math.round(props.rating)}
          maxRating={5}
          disabled
        />
      </div>
      <div className={styles.reviewDate}>{props.createdAt}</div>
      <div>{props.text}</div>
    </div>
  );
};

ReviewCard.propTypes = {
  text: PropTypes.string.isRequired,
  reviewerName: PropTypes.string.isRequired,
  rating: PropTypes.number,
  createdAt: PropTypes.string.isRequired
};
