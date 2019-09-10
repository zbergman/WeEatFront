import React from "react";
import { Divider } from "semantic-ui-react";
import PropTypes from "prop-types";
import { ReviewCard } from "./ReviewCard";
import { connect } from "react-redux";
import { getReviews } from "../../selectors/ReviewSelectors";
import styles from "./ReviewsList.module.scss";

const ReviewsList = (props) => {
  const { reviews } = props;

  if (!reviews || reviews.length === 0) {
    return <div className={styles.noReviews}>No reviews.</div>;
  }

  return reviews.map((review, index) => {
      return (
        <div key={review.id}>
          {index > 0 && <Divider />}
          <ReviewCard {...review} />
        </div>
      );
    }
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array
};
const mapStateToProps = state => ({ reviews: getReviews(state) });

export default connect(mapStateToProps)(
  ReviewsList
);
