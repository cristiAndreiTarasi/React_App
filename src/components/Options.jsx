import React from 'react';
import MealType from './MealType.jsx';
import Featured from './Featured.jsx'
import MainIngredients from './MainIngredients.jsx';
import Recipees from './Recipees.jsx';

class Options extends React.Component {
    state = {
        component: <Featured />,
        componentTwo: null,
        componentThree: null
    }

    handleClick = () => {
        this.setState({
            component: <MealType click={this.handleClickTwo}/>,
        })
    }

    handleClickTwo = (evt) => {
        evt.preventDefault();

        this.setState({
            componentTwo: <MainIngredients click={this.handleClickThree}/>
        })
    }

    handleClickThree = (evt) => {
        evt.preventDefault();

        this.setState({
            componentThree: <Recipees />
        })
    }

    render() { 
        return (
            <div>
                <form>
                    <div className="container">
                        <div className="form-group col-md-10 offset-md-1">
                            <select className="custom-select mb-3">
                                <option selected>All</option>

                                <option onClick={this.handleClick}>Meal Type</option>

                                <option>Ingredients</option>
                                <option>World Cuisine</option>
                                <option>Cooking Style</option>
                            </select>
                        </div>
                    </div>
                </form>

                {this.state.component}
                {this.state.componentTwo}
                {this.state.componentThree}
            </div>
        );
    }
}
 
export default Options;
