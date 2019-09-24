import React from "react";
import RestaurantsList from "../components/restaurant/RestaurantsList";
import HeaderLine from "../components/header/HeaderLine";
import FiltersComponent from "../components/filters/FiltersComponent";
import AddReviewModal from "../components/review/AddReviewModal";
import AddRestaurantModal from "../components/restaurant/AddRestaurantModal";
import { Container, Divider } from "semantic-ui-react";

export const Home = () => {
  return (
    <Container>
      <HeaderLine />
      <FiltersComponent />
      <Divider />
      <RestaurantsList />
      <AddRestaurantModal />
      <AddReviewModal />
    </Container>
  );
};

