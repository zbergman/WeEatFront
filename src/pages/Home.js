import React from "react";
import RestaurantsList from "../components/restaurant/RestaurantsList";
import HeaderLine from "../components/header/HeaderLine";
import FiltersComponent from "../components/filters/FiltersComponent";
import AddReviewModal from "../components/review/AddReviewModal";
import AddRestaurantModal from "../components/restaurant/AddRestaurantModal";
import PropTypes from "prop-types";
import {
  isAddReviewModalOpen,
  isAddRestaurantModalOpen
} from "../selectors/ModalsSelectors";
import { connect } from "react-redux";
import { Container, Divider } from "semantic-ui-react";

const Home = props => {
  return (
    <>
      <HeaderLine />
      <Container>
        <FiltersComponent />
        <Divider />
        <RestaurantsList />
        {props.isAddRestaurantModalOpen && <AddRestaurantModal />}
        {props.isAddReviewModalOpen && <AddReviewModal />}
      </Container>
    </>
  );
};

Home.propTypes = {
  isAddReviewModalOpen: PropTypes.bool,
  isAddRestaurantModalOpen: PropTypes.bool
};

const mapStateToProps = state => ({
  isAddRestaurantModalOpen: isAddRestaurantModalOpen(state),
  isAddReviewModalOpen: isAddReviewModalOpen(state)
});

export default connect(mapStateToProps)(Home);
