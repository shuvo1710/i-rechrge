import React from 'react';
import { AiOutlineRightCircle } from 'react-icons/ai';
import image from "../../utilities/onlineRecharge/onlineRecharge.jpg"
import "./OnlineRechargeAndPay.css"

const OnlineRechargeAndPay = () => {
    return (
        <section className='container'>
            <div className='d-grid '>
                <div className='row'>
                    <div className='col-6 col-lg-6 col-md-6 col-sm-12'>
                        <img src={image} className="h-75 " alt="" srcset="" />
                    </div>
                    <div className='col-6 col-lg-6 col-md-6 col-sm-12 '>
                        <div className='w-75'>
                            <h2 className='onlineRechargeHead'>online recharge and pay monthly bill Easy way</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem expedita odit voluptate sapiente eveniet eligendi aspernatur doloribus sint obcaecati, minima exercitationem quos, veritatis totam quis dolor, officia eius numquam neque.</p>

                           <div className='mt-5'>
                           <div>
                                <div className='d-flex justify-content-start'>
                                    <span>
                                        <AiOutlineRightCircle className='fs-3 d-inline iconColor' />
                                    </span>
                                    <div className='ps-3'>
                                        <h5 className='m-0'>Choose what to do</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptate fugit doloremque molestiae necessitatibus at!</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='d-flex justify-content-start'>
                                    <span>
                                        <AiOutlineRightCircle className='fs-3 d-inline iconColor' />
                                    </span>
                                    <div className='ps-3'>
                                        <h5 className='m-0'>Choose what to do</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptate fugit doloremque molestiae necessitatibus at!</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='d-flex justify-content-start'>
                                    <span>
                                        <AiOutlineRightCircle className='fs-3 d-inline iconColor' />
                                    </span>
                                    <div className='ps-3'>
                                        <h5 className='m-0'>Choose what to do</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptate fugit doloremque molestiae necessitatibus at!</p>
                                    </div>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OnlineRechargeAndPay;