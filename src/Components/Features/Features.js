import React from 'react';
import { Container } from 'react-bootstrap';
import { AiFillLock } from "react-icons/ai";
import { FaHandshake,FaChalkboardTeacher } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import './Features.css'

const Features = () => {
    return (
        <div className='feature'>
            <Container>
                <h3 className="text-center mb-2">Why Choose Us</h3>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 col-xl-3">
                        <div className='commonFeature mb-2'>
                            <div className="iconContainer1 commonIconContainer">
                                <AiFillLock className='fs-3'/>
                            </div>
                            <h4>100% Secure Payments</h4>
                            <p>Moving your card details to a much more secured place.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 col-xl-3">
                        <div className='commonFeature mb-2'>
                            <div className="iconContainer2 commonIconContainer">
                                <FaHandshake className='fs-3'/>
                            </div>
                            <h4>24/7 Support</h4>
                            <p>We are providing 24 hour support for any technical issua or customization</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 col-xl-3">
                        <div className='commonFeature mb-2'>
                            <div className="iconContainer3 commonIconContainer">
                                <BsCurrencyDollar className='fs-3'/>
                            </div>
                            <h4>Bonus on reference</h4>
                            <p>Refer to your friend and get up to 15% bonus</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 col-xl-3">
                        <div className='commonFeature mb-2'>
                            <div className="iconContainer4 commonIconContainer">
                                <FaChalkboardTeacher className='fs-3'/>
                            </div>
                            <h4>Easy operating system</h4>
                            <p>Very easy to get understand about our events and plan packages</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Features;