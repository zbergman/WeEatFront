import React, { Component } from "react";
import { Accordion, Icon, AccordionContent } from "semantic-ui-react";
import { RestaurantCard } from "./RestaurantCard";
import PropTypes from "prop-types";
import ReviewsList from "../review/ReviewsList";
import { connect } from "react-redux";
import { getRestaurants, setCurrentRestaurant } from "../../actions/index";
import styles from "./RestaurantsList.module.scss";

class RestaurantsList extends Component {
  state = { activeIndex: -1 };

  static propTypes = {
    restaurants: PropTypes.array,
    setCurrentRestaurant: PropTypes.func,
    getRestaurants: PropTypes.func
  };

  componentDidMount() {
    this.props.getRestaurants();
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    const newCurrentRestaurant =
      newIndex < 0 ? {} : this.props.restaurants[newIndex];

    this.setState({ activeIndex: newIndex });
    this.props.setCurrentRestaurant(newCurrentRestaurant);
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion>
        {this.props.restaurants.map((restaurant, index) => {
          return (
            <div key={restaurant.id}>
              <Accordion.Title
                active={activeIndex === index}
                index={index}
                onClick={this.handleClick}
                className={styles.accordionTitleContainer}
              >
                <Icon name="dropdown" />
                <RestaurantCard {...restaurant} />
              </Accordion.Title>
              <AccordionContent active={activeIndex === index}>
                <ReviewsList reviews={restaurant.reviews} />
              </AccordionContent>
            </div>
          );
        })}
      </Accordion>
    );
  }
}

export default connect(
  state => ({ restaurants: state.restaurants }),
  { getRestaurants, setCurrentRestaurant }
)(RestaurantsList);
