import React from 'react';
import "./Login.css"
import image from "../../utilities/loginAndRegisterImages/loginbg.jpg"
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Login = () => {
    return (
        <div>
            <div className='logInImg position-relative'>
                <img className='h-100 w-100' src={image} alt="" srcSet="" />
               
                <div className='imageOverLay position-absolute top-0 h-100 w-100'>
                
                    <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='container '>
                    <Link to="/"><FaHome  className='backHome'></FaHome></Link>
                        <h1 className='logInHeader'>Log in Account</h1>
                        <p className='fs-5 fw-semibold'>New To I-Recharge? <Link className='LoginLink' to='/signup'>Sign Up</Link></p>
                        <form className='loginForm'>
                            <div >
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
                            <button className='logInBtn' type="submit">Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;