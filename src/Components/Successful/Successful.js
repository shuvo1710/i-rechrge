import React from 'react';
import { Container } from 'react-bootstrap';
import anim from '../../utilities/successful.gif'
import './Successful.css'

const Successful = () => {
    return (
        <div>
            <Container>
                <div className="successfullMessage text-center">
                    <div>
                        <div className="succAnimation">
                            <img src={anim} alt="" className="w-100 h-100" />
                        </div>
                        <h4>Payment Successful</h4>
                        <p>Your Payment is successful. Your will recieve an order confirmation email/sms shortly with the expected package you have choosen.</p>
                        <div className='successButtons'>
                            <button className='mx-2 border-0 bg-primary text-light py-2 px-4 rounded mb-2'>Back to Home</button>
                            <button className='mx-2 border-0 bg-primary text-light py-2 px-4 rounded mb-2'>Recharge Again</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Successful;