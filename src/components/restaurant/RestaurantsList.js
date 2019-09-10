import React, { Component } from "react";
import { Accordion, Icon, AccordionContent } from "semantic-ui-react";
import { RestaurantCard } from "./RestaurantCard";
import PropTypes from "prop-types";
import ReviewsList from "../review/ReviewsList";
import { connect } from "react-redux";
import { getRestaurants, setCurrentRestaurantId } from "../../actions/index";
import styles from "./RestaurantsList.module.scss";

class RestaurantsList extends Component {
  state = { activeIndex: null };

  static propTypes = {
    restaurants: PropTypes.array,
    setCurrentRestaurantId: PropTypes.func,
    getRestaurants: PropTypes.func
  };

  componentDidMount() {
    this.props.getRestaurants();
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? null : index;
    const newCurrentRestaurantId =
      newIndex && this.props.restaurants[newIndex].id;

    this.setState({ activeIndex: newIndex });
    this.props.setCurrentRestaurantId(newCurrentRestaurantId)
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

const mapStateToProps = state => ({ restaurants: state.restaurants });
const mapDispatchToProps = { getRestaurants, setCurrentRestaurantId };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsList);
