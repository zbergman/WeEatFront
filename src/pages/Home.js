import React from "react";
import RestaurantsList from "../components/restaurant/RestaurantsList";
import Header from "../components/header/HeaderLine";
import FiltersComponent from "../components/filters/FiltersComponent";
import AddReviewModal from "../components/review/AddReviewModal";
import AddRestaurantModal from "../components/restaurant/AddRestaurantModal";
import PropTypes from "prop-types";
import {
  isAddReviewModalOpen
} from "../selectors/ModalsSelectors";
import { connect } from "react-redux";
import { Container, Divider } from "semantic-ui-react";

const Home = props => {
  return (
    <Container>
      <Header />
      <FiltersComponent />
      <Divider/>
      <RestaurantsList />
      <AddRestaurantModal />
      {props.isAddReviewModalOpen && <AddReviewModal />}
    </Container>
  );
};

Home.propTypes = {
  isAddReviewModalOpen: PropTypes.bool
};

const mapStateToProps = state => ({
  isAddReviewModalOpen: isAddReviewModalOpen(state)
});

export default connect(mapStateToProps)(Home);
