import React from "react";
import { Modal } from "semantic-ui-react";
import AddRestaurant from "../../forms/AddRestaurant";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { isAddRestaurantModalOpen } from "../../selectors/ModalsSelectors";

const AddRestaurantModal = (props) => {
  return (
    <Modal open={props.isOpen} size="tiny" dimmer="inverted">
      <Modal.Header>Create new restaurant</Modal.Header>
      <Modal.Content>
        <AddRestaurant />
      </Modal.Content>
    </Modal>
  );
};
AddRestaurantModal.propTypes = {
  isOpen: PropTypes.bool
};

const mapStateToProps = state => ({
  isOpen: isAddRestaurantModalOpen(state)
});

export default connect(mapStateToProps)(AddRestaurantModal);
