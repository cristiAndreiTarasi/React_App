
// import react
import React from 'react';
import ReactDOM from 'react-dom';

// import the fontawesome library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(
    fab, fas
);

// impor bootstrap
 import 'bootstrap/dist/css/bootstrap.min.css';

// mixed imports
import './main.scss';
import jumboBg from './images/garlic.jpg';

// import components
import Header from './components/Header.jsx';
import Jumbotron from './components/Jumbotron.jsx';
import Options from './components/Options.jsx';
// import Featured from './components/Featured.jsx';
import Footer from './components/Footer.jsx';

const myJumboBg = new Image();
myJumboBg.src = jumboBg;

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Jumbotron />
                <Options />
                {/* <Featured /> */}
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
















