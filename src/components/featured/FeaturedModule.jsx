import React from 'react';

const FeaturedModule = (props) => {
    return (
        <div>
            <div className="card">
                <img className="card-img-top"  src={props.img} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div> 
        </div>
    )
};

export default FeaturedModule;
