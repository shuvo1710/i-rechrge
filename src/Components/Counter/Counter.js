import React from 'react';
import "./Counter.css"
import { FaComments, FaUserAlt, FaUserFriends } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import CountUp from 'react-countup';


const Counter = () => {
    return (
        <section className='counterBody'>
            <div className='container'>
                <div className='d-flex gap-2'>
                    <div className='py-4 singleCounter w-100'>
                        <FaUserAlt className='CounterIcon' />
                        <br />
                        <CountUp className='fontSize' end={10155}> 
                        <h3>10155M</h3>
                        </CountUp>
                        
                        <h6>Members</h6>
                    </div>
                    <div className='py-4 singleCounter w-100'>
                        <FaUserFriends className='CounterIcon ' />
                        <br />
                        <CountUp className='fontSize' end={565165}>
                        <h3 >565165</h3>
                        </CountUp>
                        <h6>Users</h6>
                    </div>
                    <div className='py-4 singleCounter w-100'>
                        <HiDownload className='CounterIcon' />
                        <br />
                        <CountUp className='fontSize' end={51313}>
                        <h3 >51313</h3>
                        </CountUp>
                        <h6>App Download</h6>
                    </div>
                    <div className='py-4 singleCounter w-100'>
                        <FaComments className='CounterIcon' />
                        <br />
                        <CountUp className='fontSize' end={54546}>
                        <h3 className='fontSize'>54546</h3>
                        </CountUp>
                        <h6>App Review</h6>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Counter;