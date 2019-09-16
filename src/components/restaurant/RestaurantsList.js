import React, { PureComponent } from "react";
import { Accordion, Icon, AccordionContent } from "semantic-ui-react";
import { RestaurantCard } from "./RestaurantCard";
import PropTypes from "prop-types";
import ReviewsList from "../review/ReviewsList";
import { connect } from "react-redux";
import { getRestaurants, setCurrentRestaurantId } from "../../actions/index";
import { getFilteredRestaurants } from "../../selectors/RestaurantSelectors";
import styles from "./RestaurantsList.module.scss";

class RestaurantsList extends PureComponent {
  state = { activeRestaurantId: null };

  static propTypes = {
    filteredRestaurants: PropTypes.array,
    setCurrentRestaurantId: PropTypes.func,
    getRestaurants: PropTypes.func
  };

  componentDidMount() {
    this.props.getRestaurants();
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeRestaurantId } = this.state;
    const newCurrentRestaurantId = activeRestaurantId === index ? null : index;

    this.setState({ activeRestaurantId: newCurrentRestaurantId });
    this.props.setCurrentRestaurantId(newCurrentRestaurantId);
  };

  render() {
    const { filteredRestaurants } = this.props;

    return (
      <Accordion>
        {filteredRestaurants.map(restaurant => {
          return (
            <div key={restaurant.id}>
              <Accordion.Title
                active={this.state.activeRestaurantId === restaurant.id}
                index={restaurant.id}
                onClick={this.handleClick}
                className={styles.accordionTitleContainer}
              >
                <Icon name="dropdown" />
                <RestaurantCard {...restaurant} />
              </Accordion.Title>
              <AccordionContent
                active={this.state.activeRestaurantId === restaurant.id}
              >
                <ReviewsList reviews={restaurant.reviews} />
              </AccordionContent>
            </div>
          );
        })}
      </Accordion>
    );
  }
}

const mapStateToProps = state => ({
  filteredRestaurants: getFilteredRestaurants(state)
});
const mapDispatchToProps = { getRestaurants, setCurrentRestaurantId };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsList);
