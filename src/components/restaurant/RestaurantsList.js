import React, { Component } from 'react';
import { Accordion, Icon, AccordionContent } from 'semantic-ui-react';
import { RestaurantCard } from './RestaurantCard';
import PropTypes from 'prop-types';
import { ReviewsList } from '../review//ReviewsList';
import './RestaurantsList.scss';

export class RestaurantsList extends Component {
    state = { activeIndex: -1 };

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state;

        return (
            <Accordion>
                {
                    this.props.restaurants.map((restaurant, index) => {
                        return (
                            <div key = { restaurant.id } >
                                <Accordion.Title 
                                    active = { activeIndex === index }
                                    index = { index }
                                    onClick = { this.handleClick }
                                    id = "accordion-title-container"                                    
                                >
                                    <Icon name='dropdown' />
                                    <RestaurantCard {...restaurant} />                                    
                                </Accordion.Title>
                                <AccordionContent active = { activeIndex === index }>
                                    <ReviewsList reviews = { restaurant.reviews } />
                                </AccordionContent>
                            </div>
                        )
                    })
                }
            </Accordion>
        );
    }
}

RestaurantCard.propTypes = {
    restaurants: PropTypes.array
}