
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MealCard = (props) => {
    return (
        <div className="col">
            <div className="card">
                <FontAwesomeIcon icon={props.icon} size='6x' />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    );
}
 
export default MealCard;