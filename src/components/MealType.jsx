import React from 'react';
import MealCard from './MealCard.jsx';

class MealType extends React.Component {
    render() { 
        return (
            <div className="meals">
                <div className="head">
                    <div className="container">
                        <p>What do you want to cook today?</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <MealCard icon={[ 'fas', 'coffee' ]} name="Coffee"/>
                        <MealCard icon={[ 'fas', 'carrot' ]} name="Carrot"/>
                        <MealCard icon={[ 'fas', 'leaf' ]} name="Leaf"/>
                    </div>

                    <div className="row">
                        <MealCard icon={[ 'fas', 'utensils' ]} name="Dessert"/>

                        <a href="" onClick={this.props.click}>
                            <MealCard icon={[ 'fas', 'cookie' ]} name="Cookie" />
                        </a>

                        <MealCard icon={[ 'fas', 'glass-martini' ]} name="Wine"/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MealType;