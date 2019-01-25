
import React from 'react';

// import your fontawesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer class="footer font-small">
            <div class="container">
                <div class="cols">
                    <div class="text-left py-3">
                        <h1>LOGO<span class="lead"> | Results through design and technology</span></h1>
                        
                    </div>

                    <div className="social">
                        <ul>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon 
                                        icon={[ 'fab', 'facebook-f' ]} 
                                        size='lg' />
                                </a>
                            </li>

                            <li>
                                <a href="">
                                    <FontAwesomeIcon 
                                        icon={[ 'fab', 'twitter' ]}
                                        size='lg' />
                                </a>
                            </li>

                            <li>
                                <a href="">
                                    <FontAwesomeIcon 
                                        icon={[ 'fab', 'linkedin-in' ]}
                                        size='lg' />
                                </a>
                            </li>

                            <li>
                                <a href="">
                                    <FontAwesomeIcon 
                                        icon={[ 'fab', 'youtube' ]}
                                        size='lg' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;