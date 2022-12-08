import React from 'react';
import { FaLock, FaRocket } from 'react-icons/fa';
import { FiLifeBuoy } from 'react-icons/fi';
import { GiElephant } from 'react-icons/gi';
import "./ChooseFeature.css"

const ChooseFeature = () => {
    return (
        <div className='container'>
            <h2 className='text-center'>Why choose I-Recharge?</h2>
            <p className='text-center'>Save Time and Money!</p>
            <div className='d-flex gap-2'>
                <div className='items-center border-1'>
                    <FaLock className='ChooseIcons'/>
                        <h4>100% Secure Payments</h4>
                        <p>Always get cheapest price with the best in the industry.</p>
                </div>
                <div className='items-center border-1'>
                    <FaRocket className='ChooseIcons'/>
                        <h4>Fast</h4>
                        <p>Get your recharge to family and friends in minutes</p>
                </div>
                <div className='items-center border-1'>
                    <GiElephant className='ChooseIcons'/>
                        <h4>Low cost</h4>
                        <p>Always get cheapest price with the best in the industry.</p>
                </div>
                <div className='items-center border-1'>
                    <FiLifeBuoy className='ChooseIcons'/>
                        <h4>24X7 Support</h4>
                        <p>Get your recharge to family and friends in minutes</p>
                </div>
             

                

            </div>
        </div>
    );
};

export default ChooseFeature;