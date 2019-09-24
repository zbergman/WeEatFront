import React from "react";
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { isAddReviewModalOpen } from "../../selectors/ModalsSelectors";
import { getCurrentRestaurant } from "../../selectors/RestaurantSelectors";
import AddReview from "../../forms/AddReview";

const AddReviewModal = props => {
  return (
    <Modal open={props.isOpen} size="tiny" dimmer="inverted">
      {props.isOpen && (
        <>
          <Modal.Header>Add review on {props.restaurant.name}</Modal.Header>
          <Modal.Content>
            <AddReview />
          </Modal.Content>
        </>
      )}
    </Modal>
  );
};

AddReviewModal.propTypes = {
  isOpen: PropTypes.bool,
  restaurant: PropTypes.object
};

const mapStateToProps = state => ({
  isOpen: isAddReviewModalOpen(state),
  restaurant: getCurrentRestaurant(state)
});

export default connect(mapStateToProps)(AddReviewModal);
