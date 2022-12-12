import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import "./Rafer.css"

const Rafer = () => {
    return (
        <section className='py-5 my-5 bgRefer'>
            <div className='container'>
                <div className='referBody'>
                    <div className='referHead'>
                    <h2>Refer And Earn</h2>
                    <p>Refer your friends and earn up to $20</p>
                    </div>
                    <div className='d-flex gap-4'>
                        <div className='singleRefer'>
                            <h1>1</h1>
                            <h4>You Refer friends</h4>
                            <p>share your referral link with friends.They get $10</p>
                        </div>

                        <div className='singleRefer'>
                            <h1>2</h1>
                            <h4>Your Friends Register</h4>
                            <p>Your Friends Register With using Your Referral Link</p>
                        </div>

                        <div className='singleRefer'>
                            <h1>3</h1>
                            <h4>Earn You</h4>
                            <p>You Get $20. you can use these credits to take recharge.</p>
                        </div>
                    </div>
                    <p className='earnLink'>Get start Earn <span><FaArrowRight/></span></p>
                </div>
            </div>
        </section>
    );
};

export default Rafer;