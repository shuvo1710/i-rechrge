import React from 'react';
import { Container } from 'react-bootstrap';
import banner from '../../utilities/4142132.jpg'
import './SecondBanner.css'
const SecondBanner = () => {
    return (
        <div>
            <Container>
                <div className="row align-items-center">
                    <div className="col-12 col-md-12 col-lg-7 col-xl-7">
                        <img src={banner} alt="" className="w-100" />
                    </div>
                    <div className="col-12 col-md-12 col-lg-5 col-xl-5">
                        <h1>Simple & Easy Way To Manage <span>Your Money</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nam perspiciatis fuga natus sed magnam officiis at, accusantium sunt rem consequatur animi non, optio harum!</p>
                        <button className="rechargeNow rounded">Recharge Now</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SecondBanner;