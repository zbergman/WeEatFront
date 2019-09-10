import React, {Component} from "react";
import RestaurantsList from "../components/restaurant/RestaurantsList";
import { Header } from "../components/header/Header";
import FiltersComponent from "../components/filters/FiltersComponent";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <FiltersComponent />
        <RestaurantsList />
      </React.Fragment>
    );
  }
}

export default Home;
