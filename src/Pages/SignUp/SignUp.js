import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import signImg from "../../utilities/loginAndRegisterImages/signUp.png";
import { AiOutlineHome } from "react-icons/ai";
const SignUp = () => {
  return (
    <div className="login">
      <Link className="homeBtn" to="/home">
        <AiOutlineHome className="fs-4" />
      </Link>
      <Container>
        <div className="loginContainer">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 p-0">
              <div>
                <img src={signImg} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 p-0">
              <div>
                <div className="loginForm">
                  <h2>
                    Sign Up <br />
                    <span>With i-Recharge</span>
                  </h2>
                  <form>
                    <div className="singleInput">
                      <label className="d-block" htmlFor="">
                        Full Name
                      </label>
                      <input
                        className=""
                        type="text"
                        placeholder="Full Name"
                        required
                        defaultValue="Mark Otto"
                      />
                    </div>
                    <div className="singleInput">
                      <label className="d-block" htmlFor="">
                        Mobile Number
                      </label>
                      <input
                        className=""
                        type="text"
                        placeholder="Mobile Number"
                        required
                        defaultValue="01XXXXXXXXXXXXX"
                      />
                    </div>
                    <div className="singleInput">
                      <label className="d-block" htmlFor="">
                        Email Address
                      </label>
                      <input
                        className=""
                        type="email"
                        placeholder="Email Address"
                        required
                        defaultValue="example@gmail.com"
                      />
                    </div>
                    <div className="singleInput">
                      <label className="d-block" htmlFor="">
                        Password
                      </label>
                      <input
                        className=""
                        type="password"
                        placeholder="Password"
                        defaultValue="Mark Otto"
                      />
                    </div>
                    <input
                      className="signInbtn"
                      type="submit"
                      value="Sign In"
                    />
                  </form>
                  <div className="mt-3">
                    <span>Already Signed Up?</span>
                    <Link className="ms-3 text-decoration-none" to="login">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
