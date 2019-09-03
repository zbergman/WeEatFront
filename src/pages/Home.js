import React, { Component } from 'react';
import RestaurantsList from '../components/restaurant/RestaurantsList';
import { Header } from '../components/header/Header';
import FiltersComponent from '../components/filters/FiltersComponent';
import './Home.scss';

class Home extends Component {    
    render() {
        return (
            <div id="home-container">
                <Header />
                <FiltersComponent />
                <div>
                    <RestaurantsList />
                </div>
            </div>
        );
    }
}

export default Home;