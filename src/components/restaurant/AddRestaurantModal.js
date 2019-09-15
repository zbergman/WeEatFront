import React from "react";
import { Button, Modal } from "semantic-ui-react";
import AddRestaurant from "../../forms/AddRestaurant";
import styles from "./AddRestaurantModal.module.scss";

export const AddRestaurantModal = () => {
  return (
    <Modal
      trigger={
        <Button
          circular={true}
          icon="plus"
          className={styles.addRestaurantButton}
        />
      }
    >
      <Modal.Header>Create new restaurant</Modal.Header>
      <Modal.Content>
        <AddRestaurant />
      </Modal.Content>
    </Modal>
  );
};
