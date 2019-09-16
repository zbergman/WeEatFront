import React from "react";
import SearchRestaurant from "../filters/SearchRestaurant";
import { Button } from "semantic-ui-react";
import { setModalOpenState } from "../../actions/index";
import { connect } from "react-redux";
import { IS_ADD_RESTAURANT_OPEN } from "../../constants/Modals";
import AddRestaurantModal from "../../components/restaurant/AddRestaurantModal";
import PropTypes from "prop-types";
import styles from "./Header.module.scss";

const Header = (props) => {
  const handleAddRestaurant = () => {
    props.setModalOpenState(IS_ADD_RESTAURANT_OPEN, true);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerImage}>
        <div className={styles.headerText}>WeEat</div>
        <div className={styles.headerItemsContainer}>
          <SearchRestaurant className={styles.search} />
          <Button
            circular
            icon="plus"
            className={styles.addRestaurantButton}
            onClick={handleAddRestaurant}
          />
          <AddRestaurantModal />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  setModalOpenState: PropTypes.func
};

const mapStateToProps = state => state;
const mapDispatchToProps = { setModalOpenState };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
