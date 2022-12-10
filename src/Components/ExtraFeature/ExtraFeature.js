import React from 'react';
import { BsBox } from 'react-icons/bs';
import { RxUpdate } from 'react-icons/rx';
import "./ExtraFeature.css"
import { MdMobileFriendly, MdSupport } from 'react-icons/md';

const ExtraFeature = () => {
    return (
        <section className='container py-5'>
            <div className='text-center '>
                <div className='extraHead'>
                <h2>Our Features & Services</h2>
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='p-2 align-items-center'>
                        <div className='iconsCircel bgGreen'>
                            <span>
                                <RxUpdate className='extraFeatureIcons' />
                            </span>
                        </div>
                        <div className='text-center ExtraFeatureText'>
                            <h5>Automatic UPdates</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae perferendis molestiae vero laborum voluptatibus a?</p>
                        </div>
                    </div>

                    <div className='p-2 align-items-center'>
                        <div className='iconsCircel bgOrange'>
                            <span>
                                <BsBox className='extraFeatureIcons' />
                            </span>
                        </div>
                        <div className='text-center ExtraFeatureText'>
                            <h5>Blazing Performance</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae perferendis molestiae vero laborum voluptatibus a?</p>
                        </div>
                    </div>

                    
                </div>

                <div className='d-flex py-5'>
                    <div className='p-2 align-items-center'>
                        <div className='iconsCircel bgPurple'>
                            <span>
                                <MdMobileFriendly className='extraFeatureIcons' />
                            </span>
                        </div>
                        <div className='text-center ExtraFeatureText'>
                            <h5>Seo Friendly</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae perferendis molestiae vero laborum voluptatibus a?</p>
                        </div>
                    </div>

                    <div className='p-2 align-items-center'>
                        <div className='iconsCircel bgRed'>
                            <span>
                                <MdSupport className='extraFeatureIcons' />
                            </span>
                        </div>
                        <div className='text-center ExtraFeatureText'>
                            <h5>Unlimited Support</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae perferendis molestiae vero laborum voluptatibus a?</p>
                        </div>
                    </div>
                    </div>
            </div>
        </section>
    );
};

export default ExtraFeature;