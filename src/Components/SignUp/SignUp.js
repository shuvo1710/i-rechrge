import React from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css"

import image from "../../utilities/loginAndRegisterImages/loginbg.jpg"

import { FcGoogle } from 'react-icons/fc';

import { FaFacebook, FaHome } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';


const SignUp = () => {
    return (
        <div>
            <div className='logInImg position-relative'>
                <img className='h-100 w-100' src={image} alt="" srcSet="" />
                <div className='imageOverLay position-absolute top-0 h-100 w-100'>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='container '>
                    <Link to="/"><FaHome  className='backHome'></FaHome></Link>
                        <h1 className='signUpHeader'>Create a new account<span className='createDot'>.</span></h1>
                        <p className='fs-5 fw-semibold'>Already A Member? <Link className='LoginLink' to='/login'>Log In</Link></p>
                        <form className='SignUpForm'>
                           <div>
                           <div className='d-flex mb-4 '>
                                <div className='SignUpName'>
                                <label className='text-white' htmlFor="">Fast Name</label>
                                <br />
                                <input type="text" placeholder='Fast Name'/>
                                </div>

                                <div className='SignUpName lastName'>
                                <label className='text-white' htmlFor="">Last Name</label>
                                <br />
                                <input className='' type="text" placeholder='Last Name'/>
                                </div>
                            </div>
                           </div>
                            

                            <div>
                            <label className='text-white' htmlFor="">Inter Your Email</label>
                            <br />
                            <input  type="email" placeholder='Email' />
                            </div>
                            <br />
                            <div>
                            <label className='text-white' htmlFor="">Inter Your password</label>
                            <br />
                            <input className='inputPass' type="password" placeholder='Password' />
                            </div>
                            <br />
                            <button className='signUpSubmit'  type="submit">Submit</button>

                            <div className='mt-4 text-white'>
                                <p className='m-0 '>Or <br/> <span>Login With</span></p>
                                <div className='signUpIcon'>
                                    <FcGoogle className='google'/>
                                     <FaFacebook className='faceBook'/>
                                     <BsTwitter className='twitter'/>
                                   
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;