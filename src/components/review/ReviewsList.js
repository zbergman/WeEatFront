import React from "react";
import { Divider } from "semantic-ui-react";
import PropTypes from "prop-types";
import { ReviewCard } from "./ReviewCard";
import styles from "./ReviewsList.module.scss";

export const ReviewsList = props => {
  const { reviews } = props;

  if (!reviews || reviews.length === 0) {
    return <div className={styles.noReviews}>No reviews.</div>;
  }

  return reviews.map((review, index) => (
    <div key={review.id}>
      {index > 0 && <Divider />}
      <ReviewCard {...review} />
    </div>
  ));
};

ReviewsList.propTypes = {
  reviews: PropTypes.array
};
