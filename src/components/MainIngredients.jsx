
import React from 'react';
import MealCardIngredient from './MealCardIngredient.jsx';

const MainIngredients = (props) => {
    return (
        <div className="ingredients">
            <div className="head">
                <div className="container">
                    <p>What do you want in your cookie?</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <a href="" onClick={props.click}>
                        <MealCardIngredient icon={[ 'fas', 'horse-head' ]} name="Horse Head"/>
                    </a>
                    <MealCardIngredient icon={[ 'fas', 'cannabis' ]} name="Cannabis"/>
                    <MealCardIngredient icon={[ 'fas', 'rainbow' ]} name="Rainbow"/>
                </div>
            </div>
        </div>
    );
}
 
export default MainIngredients;