
import React from 'react';
import FeaturedModule from './featured/FeaturedModule.jsx'

const Recipees = () => {
    return (
        <div className="featured_horses">
            <div className="container">
                <div className="card-deck">
                    <FeaturedModule img="https://i.pinimg.com/originals/81/cf/06/81cf06f94840d0e16bdabf1b73d5ed88.jpg" title="Dilled horse salad"/>
                    <FeaturedModule img="https://dressagedifferent.files.wordpress.com/2015/01/horse-head.jpg?w=350&h=200&crop=1" title="Southwest Horse Salad"/>
                    <FeaturedModule img="https://i.pinimg.com/originals/81/cf/06/81cf06f94840d0e16bdabf1b73d5ed88.jpg" title="Horse, avocado and roasted corn salad"/>
                    <FeaturedModule img="https://nackpets.files.wordpress.com/2016/10/horse-by-johnrp-400x267.jpg?w=350&h=200&crop=1" title="Tabouli horse salad"/>
                    <FeaturedModule img="https://dressagedifferent.files.wordpress.com/2015/01/horse-head.jpg?w=350&h=200&crop=1" title="Hawaiian horse salad with lemon"/>
                    <FeaturedModule img="https://nackpets.files.wordpress.com/2016/10/horse-by-johnrp-400x267.jpg?w=350&h=200&crop=1" title="Grilled horse caesar salad"/>
                </div>
            </div>
        </div>
    );
}
 
export default Recipees;