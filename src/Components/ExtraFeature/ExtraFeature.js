import React from 'react';
import { BsBox } from 'react-icons/bs';
import { RxUpdate } from 'react-icons/rx';
import "./ExtraFeature.css"
import { MdMobileFriendly, MdSupport } from 'react-icons/md';
import { FaUserCheck } from 'react-icons/fa';
import { RiUserStarFill } from 'react-icons/ri';
import { Container } from 'react-bootstrap';

const ExtraFeature = () => {
    return (
        <section className='ExtraFeatureSection'>
            <Container className='p-0'>
            <div className='text-center'>
                <div className='extraHead'>
                    <h2>Our Features & Services</h2>
                    <p className='m-0'>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className='row g-2 '>

                    <div className='col-6 col-md-6 col-lg-4 p-2 m-0 align-items-center'>
                        <div className='iconsCircel bgGreen'>
                            <span>
                                <RxUpdate className='extraFeatureIcons' />
                            </span>
                        </div>
                        <div className='text-center ExtraFeatureText'>
                            <h5>Automatic UPdates</h5>
                            <p>Lorem, ipsum dolor sit amet consecte</p>
                        </div>
                    </div>

                    <div className='col-6 col-md-6 col-lg-4 p-2 m-0 align-items-center'>
                        <div className='iconsCircel bgOrange'>
                            <span>
                                <BsBox className='extraFeatureIcons' />
                            </span>
                        </div>
                        <div className='text-center ExtraFeatureText'>
                            <h5>Blazing Performance</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipi</p>
                        </div>
                    </div>

                    <div className='col-6 col-md-6 col-lg-4 p-2 m-0 align-items-center'>
                        <div className='iconsCircel bgPurple'>
                            <span>
                                <MdMobileFriendly className='extraFeatureIcons' />
                            </span>
                        </div>
                        <div className='text-center ExtraFeatureText'>
                            <h5>Seo Friendly</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipi</p>
                        </div>
                    </div>

                    <div className='col-6 col-md-6 col-lg-4 p-2 m-0 align-items-center'>
                        <div className='iconsCircel bgRed'>
                            <span>
                                <MdSupport className='extraFeatureIcons' />
                            </span>
                        </div>
                        <div className='text-center ExtraFeatureText'>
                            <h5>Unlimited Support</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipis</p>
                        </div>
                    </div>
                    <div className='col-6 col-md-6 col-lg-4 p-2 m-0 align-items-center'>
                        <div className='iconsCircel bgGreen'>
                            <span>
                                <RiUserStarFill className='extraFeatureIcons' />
                            </span>
                        </div>
                        <div className='text-center ExtraFeatureText'>
                            <h5>Easy operating system</h5>
                            <p>Lorem, ipsum dolor sit amet consecte</p>
                        </div>
                    </div>

                    <div className='col-6 col-md-6 col-lg-4 p-2 m-0 align-items-center'>
                        <div className='iconsCircel bgOrange'>
                            <span>
                                <BsBox className='extraFeatureIcons' />
                            </span>
                        </div>
                        <div className='text-center ExtraFeatureText'>
                            <h5>Blazing Performance</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipi</p>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        </section>
    );
};

export default ExtraFeature;