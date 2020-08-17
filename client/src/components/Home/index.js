import React, { Component } from 'react';
import HomeSlider from './home_slider';
import HomePromotion from './home_promossion';

class Home extends Component {
    render() {
        return (
            <div>
                <HomeSlider/>
                <HomePromotion/>
            </div>
        );
    }
}

export default Home;