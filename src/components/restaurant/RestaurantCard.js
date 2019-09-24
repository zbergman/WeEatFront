import React, { Component } from "react";
import PropTypes from "prop-types";
import { CuisineImage } from "./CuisineImage";
import { TenBis } from "../TenBis";
import { Rating, Card, Button } from "semantic-ui-react";
import { ReviewsList } from "../review/ReviewsList";
import styles from "./RestaurantCard.module.scss";
import { connect } from "react-redux";
import {
  toggleModalOpenState,
  setCurrentRestaurantId
} from "../../actions/index";
import { IS_ADD_REVIEW_OPEN } from "../../constants/Modals";
import cn from "classnames";

class RestaurantCard extends Component {
  state = {
    isShowReviews: false
  };

  handleReviewsDisplay = () => {
    this.setState(({ isShowReviews }) => ({ isShowReviews: !isShowReviews }));
  };

  handleAddReview = () => {
    this.props.setCurrentRestaurantId(this.props.id);
    this.props.toggleModalOpenState(IS_ADD_REVIEW_OPEN);
  };

  render() {
    const {
      cuisine,
      name,
      address,
      maxDeliveryTimeInMinutes,
      is10Bis,
      rating,
      reviews
    } = this.props.restaurant;

    return (
      <Card className={styles.cardContainer}>
        <CuisineImage cuisine={cuisine} />
        <Card.Content>
          <Card.Header className={styles.cardHeader}>
            <div>{name}</div>
            <Rating defaultRating={rating} maxRating={5} disabled />
          </Card.Header>
          <Card.Meta>{address}</Card.Meta>
          <Card.Description className={styles.cardDescription}>
            <div className={styles.descriptionArea}>
              <div>~{maxDeliveryTimeInMinutes} Minutes</div>
              {is10Bis && <TenBis className={styles.tenBisImage} />}
            </div>
            <div className={styles.descriptionArea}>
              <Button
                icon="comment outline"
                className={styles.reviewButton}
                onClick={this.handleAddReview}
              />
              <Button
                icon={this.state.isShowReviews ? "angle up" : "angle down"}
                className={styles.reviewButton}
                onClick={this.handleReviewsDisplay}
              />
            </div>
          </Card.Description>
        </Card.Content>
        <Card.Content
          className={cn({
            [styles.showReviews]: this.state.isShowReviews,
            [styles.hideReviews]: !this.state.isShowReviews
          })}
        >
          <ReviewsList reviews={reviews} />
        </Card.Content>
      </Card>
    );
  }
}

RestaurantCard.propTypes = {
  restaurant: PropTypes.object.isRequired,
  toggleModalOpenState: PropTypes.func,
  setCurrentRestaurantId: PropTypes.func
};

const mapStateToProps = state => state;
const mapDispatchToProps = { toggleModalOpenState, setCurrentRestaurantId };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantCard);
