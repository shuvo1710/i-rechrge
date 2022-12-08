import React from 'react';
import "./Counter.css"
import { FaComments, FaUserAlt, FaUserFriends } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';


const Counter = () => {
    return (
        <section className='counterBody'>
            <div className='container'>
                <div className='d-flex gap-2'>
                    <div className='py-4 singleCounter w-100'>
                        <FaUserAlt className='CounterIcon' />
                        <h3>10155</h3>
                        <h6>Members</h6>
                    </div>
                    <div className='py-4 singleCounter w-100'>
                        <FaUserFriends className='CounterIcon ' />
                        <h3>51113</h3>
                        <h6>Users</h6>
                    </div>
                    <div className='py-4 singleCounter w-100'>
                        <HiDownload className='CounterIcon' />
                        <h3>35121</h3>
                        <h6>App Download</h6>
                    </div>
                    <div className='py-4 singleCounter w-100'>
                        <FaComments className='CounterIcon' />
                        <h3>87464</h3>
                        <h6>App Review</h6>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Counter;