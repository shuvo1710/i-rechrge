import React from 'react';
import "./Counter.css"
import { FaComments, FaUserAlt, FaUserFriends } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { Container } from 'react-bootstrap';
import CountUp from 'react-countup';


const Counter = () => {
    return (
        <section className='counterBody'>
            <Container className='p-0'>
                <div className='d-flex gap-2'>
                    <div className='py-4 singleCounter w-100'>
                        <FaUserAlt className='CounterIcon' />
                        <br />
                        <CountUp className='fontSize' end={155000}> 
                     
                        </CountUp>
                        <h6>Members</h6>
                    </div>
                    <div className='py-4 singleCounter w-100'>
                        <FaUserFriends className='CounterIcon ' />
                        <br />
                        <CountUp className='fontSize' end={200000}>
                        <h3 >565165</h3>
                        </CountUp>
                        <h6>Users</h6>
                    </div>
                    <div className='py-4 singleCounter w-100'>
                        <HiDownload className='CounterIcon' />
                        <br />
                        <CountUp className='fontSize' end={1200000}>
                   
                        </CountUp>
                        <h6>App Download</h6>
                    </div>
                    <div className='py-4 singleCounter w-100'>
                        <FaComments className='CounterIcon' />
                        <br />
                        <CountUp className='fontSize' end={135000} >
                       
                        </CountUp>
                        <h6>App Review</h6>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Counter;