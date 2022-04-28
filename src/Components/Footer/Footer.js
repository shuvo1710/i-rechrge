import React from 'react';
import { Container, FormControl, InputGroup } from 'react-bootstrap';
import './Footer.css'
import { Link } from "react-router-dom";
import footerLogo from "../../utilities/footerLogo.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <ul>
                            <li>
                                <h4>About Us</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.ernatur eum.</p>
                            </li>
                            <li>
                                <h4>Contact Us</h4>
                                <Link to="/home">
                                    <BsFillTelephoneFill className="me-2"/>+9856-83245
                                </Link>
                            </li>
                            <li>
                                <Link to="/home">
                                    <FaEnvelope className="me-2"/>example@gmail.com
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <h4>Information</h4>
                        <ul>
                            <li><Link to="/home">About Us</Link></li>
                            <li><Link to="/home">More Search</Link></li>
                            <li><Link to="/home">Blogs</Link></li>
                            <li><Link to="/home">Offers and discount</Link></li>
                            <li><Link to="/home">Testimonial</Link></li>
                            <li><Link to="/home">Events</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                    <h4>Helpfull links</h4>
                        <ul>
                            <li><Link to="/home">Services</Link></li>
                            <li><Link to="/home">Supports</Link></li>
                            <li><Link to="/home">Terms and conditions</Link></li>
                            <li><Link to="/home">Offers and discount</Link></li>
                            <li><Link to="/home">Testimonial</Link></li>
                            <li><Link to="/home">Privacy and policy</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                    <h4>Subscribe for more..</h4>
                        <Link to="/home">
                            <div className='logo'>
                                <img className='w-100 h-100' src={footerLogo} alt="" />
                            </div>
                        </Link>
                        <InputGroup className="mt-3">
                            <InputGroup.Text id="basic-addon1">
                            <FaEnvelope/>
                            </InputGroup.Text>
                            <FormControl
                            className='bg-transparent text-light'
                            placeholder="Enter your email"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;