import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import FooterCol from './FooterCol';
import './Footer.css';
import { usefulLink, ourServices, otherLinks, footerInfo } from '../../FooterData';

import { Link } from 'react-router-dom';
import { scrollUP } from '../../Shared/ScrollTop/ScrollTop';


const Footer = () => {
    return (
        <section className='row footer'>
            <Row>
                <Col className="fAboutUs">
                    <ul className="socialIcons">
                        <li>
                            <Link onClick={scrollUP} to="/" >
                                <FontAwesomeIcon icon={faFacebook}/>
                                </Link>
                        </li>
                        <li>
                            <Link onClick={scrollUP} to="/">
                                <FontAwesomeIcon icon={faTwitter}/>
                                </Link>
                        </li>
                        <li>
                            <Link onClick={scrollUP} to="/">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={scrollUP} to="/">
                                <FontAwesomeIcon icon={faLinkedinIn}/>
                            </Link>
                        </li>
                    </ul>
                </Col>
            <p className="copyRight">Copyright &copy; 2022. <span>Clone Mai Xuan Chien.</span></p>
            </Row>
        </section>
    );
};

export default Footer;