
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MealCardIngredient = (props) => {
    return (
        <div className="col">
            <div className="card_type">
                <FontAwesomeIcon icon={props.icon} size='6x' />
                <h5 className="card-title ct">{props.name}</h5>
            </div>
        </div>
    );
}
 
export default MealCardIngredient;