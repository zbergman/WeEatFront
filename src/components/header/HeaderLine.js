import React from "react";
import SearchRestaurant from "../filters/SearchRestaurant";
import { Button, Header, Icon } from "semantic-ui-react";
import { toggleModalOpenState } from "../../actions/index";
import { connect } from "react-redux";
import { IS_ADD_RESTAURANT_OPEN } from "../../constants/Modals";
import PropTypes from "prop-types";
import styles from "./Header.module.scss";

const HeaderLine = props => {
  const handleAddRestaurant = () => {
    props.toggleModalOpenState(IS_ADD_RESTAURANT_OPEN);
  };

  return (
    <Header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Header className={styles.logoTitle}>WeEat</Header>
          <Icon name="utensils" className={styles.logoIcon} />
        </div>
      </div>
      <div className={styles.searchAndAddContainer}>
        <SearchRestaurant className={styles.search} />
        <Button
          size="big"
          circular
          icon="plus"
          className={styles.addRestaurantButton}
          onClick={handleAddRestaurant}
        />
      </div>
    </Header>
  );
};

HeaderLine.propTypes = {
  toggleModalOpenState: PropTypes.func
};

const mapStateToProps = state => state;
const mapDispatchToProps = { toggleModalOpenState: toggleModalOpenState };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderLine);
