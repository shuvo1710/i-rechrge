import React from 'react';
import "./NewCounter.css"
import image from "../../utilities/counterImage/peoples.jpg"


const NewCounter = () => {
    return (
        <div className='container'>
            <h2 className='CounterHead'>Our Pleased Customers</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!!</p>

            <div className='position-relative'>
                <img className='counterImage w-100' src={image} alt="" srcSet="" />
                <div className='imageOverlay position-absolute top-0 h-100 w-100'>
                    <div className='d-flex justify-content-center align-items-center h-100 gap-5'>
                        <div >
                            <div className='counter'>
                                
                               <h2>3131531</h2>
                                
                                <h4>Users</h4>
                            </div>
                            <div className='counter mt-5'>
                                <h2>51611651</h2>
                                <h4>Customers</h4>
                            </div>
                        </div>
                        <div className=''>
                            <div className='counter'>
                                <h2>51611651</h2>
                                <h4>Followers
                                </h4>
                            </div>
                            <div className='counter mt-5'>
                                <h2>51611651</h2>
                                <h4>Likes</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCounter;