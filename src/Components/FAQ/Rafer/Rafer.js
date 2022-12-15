import React from 'react';
import { Container } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./Rafer.css"

const Rafer = () => {
    return (
        <section className='bgRefer'>
            <Container className='p-0'>
                <div className='referBody'>
                    <div className='referHead'>
                    <h2>Refer And Earn</h2>
                    <p className='m-0'>Refer your friends and earn up to $20</p>
                    </div>
                    <div className='d-flex gap-3 pb-4'>
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
                    <Link className='earnLink'>Get start Earn <span><BsArrowRight/></span></Link>
                </div>
            </Container>
        </section>
    );
};

export default Rafer;