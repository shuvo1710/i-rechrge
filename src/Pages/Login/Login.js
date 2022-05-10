import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import loginImg from "../../utilities/5098293.jpg";
import { AiOutlineHome } from "react-icons/ai";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();
  const history = useHistory();
  const saveEmail = (e) => {
    setEmail(e.target.value);
  };
  const savePassword = (e) => {
    setPassword(e.target.value);
  };
  let data = {};
  const signIn = (e) => {
    e.preventDefault();
    data.email = email;
    data.password = password;
    setUser(data);
    if (data?.email) {
      history.push("/home");
    } else {
      alert("Please Login First");
    }
  };

  return (
    <div className="login">
      <Link className="homeBtn" to="/home">
        <AiOutlineHome className="fs-4" />
      </Link>
      <Container>
        <div className="loginContainer">
          <div className="row align-items-center column-reverse">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 p-0">
              <div>
                <div className="loginForm">
                  <h2>
                    Sign in <br />
                    <span>With i-Recharge</span>
                  </h2>
                  <form onSubmit={signIn}>
                    <div className="singleInput">
                      <label className="d-block" htmlFor="">
                        Email Address
                      </label>
                      <input
                        onChange={saveEmail}
                        className=""
                        type="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div className="singleInput">
                      <label className="d-block" htmlFor="">
                        Password
                      </label>
                      <input
                        onChange={savePassword}
                        className=""
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <input
                      className="signInbtn"
                      type="submit"
                      value="Sign In"
                    />
                  </form>
                  <div className="mt-3">
                    <span>New Here?</span>
                    <Link className="ms-3 text-decoration-none" to="signup">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 p-0">
              <div>
                <img src={loginImg} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
