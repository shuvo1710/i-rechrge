import React from 'react';
import { Container } from 'react-bootstrap';
import { AiFillLock } from 'react-icons/ai';
import { FaHandsHelping, FaNotEqual,  FaRocket } from 'react-icons/fa';
import { FiLifeBuoy } from 'react-icons/fi';
import { GiElephant } from 'react-icons/gi';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';


import "./ChooseUs.css"
const ChooseUs = () => {
    return (
        <Container>
            <section className='choose-section'>
                <div className='ChooseHead'>
                    <h2 className=''>Why choose I-Recharge? </h2>
                    <p>Save Time and Money!</p>
                </div>
                
                    <div className='ChooseContent'>
                        <Fade left>
                        <div className='ChooseItem'>
                            <div>
                                <span className='roundedIcon'><GiElephant /></span>
                            </div>
                            <div className='chooseText'>
                                <h5>Low cost</h5>
                                <p>Always get cheapest price with the best in the industry.</p>
                            </div>
                        </div>
                        </Fade>

                        <Fade right>
                        <div className='ChooseItem'>
                            <div>
                                <span className='roundedIcon'><FaRocket /></span>
                            </div>
                            <div className='chooseText'>
                                <h5 >Fast</h5>
                                <p>Get your recharge to family and friends in minutes</p>
                            </div>
                        </div>
                        </Fade>
                    </div>
                



                
                    <div className='ChooseContent'>
                        <Fade left>
                        <div className='ChooseItem'>
                            <div>
                                <span className='roundedIcon'><FaNotEqual /></span>
                            </div>
                            <div className='chooseText'>
                                <h5>Simple</h5>
                                <p>You get $20. You can use these credits to take recharge.</p>
                            </div>
                        </div>
                        </Fade>
                        <Fade right>
                        <div className='ChooseItem'>
                            <div>
                                <span className='roundedIcon'><FaHandsHelping /></span>
                            </div>
                            <div className='chooseText'>
                                <h5 >Trust pay</h5>
                                <p>Get your recharge to family and friends in minutes</p>
                            </div>
                        </div>
                        </Fade>
                    </div>
                

                
                    <div className='ChooseContent'>
                        <Fade left>
                        <div className='ChooseItem'>
                            <div>
                                <span className='roundedIcon'><AiFillLock /></span>
                            </div>
                            <div className='chooseText'>
                                <h5>100% Secure Payments</h5>
                                <p>Always get cheapest price with the best in the industry.</p>
                            </div>
                        </div>
                        </Fade>
                        <Fade right>
                        <div className='ChooseItem'>
                            <div>
                                <span className='roundedIcon'><FiLifeBuoy /></span>
                            </div>
                            <div className='chooseText'>
                                <h5>24X7 Support</h5>
                                <p>Get your recharge to family and friends in minutes</p>
                            </div>
                        </div>
                        </Fade>
                    </div>
                



            </section>
        </Container>
    );
};

export default ChooseUs;