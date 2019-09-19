import React, { Component } from "react";
import PropTypes from "prop-types";
import { CuisineImage } from "./CuisineImage";
import { TenBis } from "../TenBis";
import { Rating, Card, Button } from "semantic-ui-react";
import { ReviewsList } from "../review/ReviewsList";
import styles from "./RestaurantCard.module.scss";
import { connect } from "react-redux";
import { setModalOpenState, setCurrentRestaurantId } from "../../actions/index";
import { IS_ADD_REVIEW_OPEN } from "../../constants/Modals";

class RestaurantCard extends Component {
  state = {
    isShowReviews: false
  };

  handleReviewsDisplay = () => {
    this.setState({ isShowReviews: !this.state.isShowReviews });
  };

  handleAddReview = () => {
    this.props.setCurrentRestaurantId(this.props.id);
    this.props.setModalOpenState(IS_ADD_REVIEW_OPEN, true);
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
    } = this.props;

    return (
      <Card className={styles.cardContainer}>
        <CuisineImage cuisine={cuisine} />
        <Card.Content>
          <Card.Header className={styles.cardHeader}>
            <div>{name}</div>
            <Rating rating={Math.round(rating)} maxRating={5} disabled />
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
          className={
            this.state.isShowReviews ? styles.showReviews : styles.hideReviews
          }
        >
          <ReviewsList reviews={reviews} />
        </Card.Content>
      </Card>
    );
  }
}

RestaurantCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  cuisine: PropTypes.string.isRequired,
  is10Bis: PropTypes.bool,
  address: PropTypes.string.isRequired,
  maxDeliveryTimeInMinutes: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.array,
  setModalOpenState: PropTypes.func,
  setCurrentRestaurantId: PropTypes.func
};

const mapStateToProps = state => state;
const mapDispatchToProps = { setModalOpenState, setCurrentRestaurantId };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantCard);
