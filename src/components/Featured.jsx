import React from 'react';

import FeaturedModule from './featured/FeaturedModule.jsx'



const Featured = () => {
    return (
        <div className="featured">
            <div className="container">
                <div className="card-deck">
                    <FeaturedModule img="https://lorempixel.com/400/200/food" title="Blog"/>
                    <FeaturedModule img="https://lorempixel.com/400/200/food/2" title="Recipe"/>
                    <FeaturedModule img="https://lorempixel.com/400/200/food/4" title="Tips"/>
                </div>
            </div>
        </div>
    );
};

export default Featured;
