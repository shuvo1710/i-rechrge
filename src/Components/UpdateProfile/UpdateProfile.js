import React from 'react';
import { Container } from 'react-bootstrap';
import "./UpdateProfile.css"
import img from "../../utilities/DemoImg/350x300.jpg"

const UpdateProfile = () => {
    return (
        <section className='updateContainer'>
            <Container className='px-0'>
                <div className='rounded-2 position-relative profileBody'>
                    <div className='UserImg'>
                        <img src={img} alt="" srcSet="" />
                    </div>
                    <div className='text-center'>
                        <h4 className='profileName m-0'>Md. Mehedi Hassan</h4>
                        <p className='userName m-0'>User Name: shuvo01</p>
                    </div>
                    <div>
                        <h4>Edit Profile</h4>
                        <form className='profileForm'>
                        <div className='ProfileInput mb-3 '>
                            <div  className='w-100 '>
                                <label htmlFor="" className='py-2'>First Name</label>
                                <br />
                                <input type="text" className='w-100 profileField '/>
                            </div>
                            <div  className='w-100 '>
                                <label htmlFor="" className='py-2'>Last Name</label>
                                <br />
                                <input type="text"  className='w-100 profileField'/>
                            </div>
                        </div>
                        <div className='ProfileInput mb-3 '>
                            <div  className='w-100 '>
                                <label htmlFor="" className='py-2'>Mobile Number</label>
                                <br />
                                <input type="text" className='w-100 profileField' />
                            </div>
                            <div  className='w-100 '>
                                <label htmlFor="" className='py-2'>State</label>
                                <br />
                                <input type="text"  className='w-100 profileField'/>
                            </div>
                        </div>
                        <div className='ProfileInput mb-3 '>
                            <div  className='w-100 '>
                                <label htmlFor="" className='py-2'>Zip Code</label>
                                <br />
                                <input type="text" className='w-100 profileField' />
                            </div>
                            <div  className='w-100 '>
                                <label htmlFor="" className='py-2'>City</label>
                                <br />
                                <input type="text"  className='w-100 profileField'/>
                            </div>
                        </div>
                        <div className='UpdateAddress mb-3'>
                            <label htmlFor="" className='py-2'>Address</label>
                            <input type="text" className='w-100 profileField' name="" id="" />
                        </div>
                        <div className='py-4'>
                        <input type="submit" value="Update Profile" className='ProfileSubmit ' />
                        </div>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default UpdateProfile;