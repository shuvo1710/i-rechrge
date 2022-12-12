import React, { useState } from "react";
import { Container, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo2 from "../../utilities/logoImages/logo1.png";
import { AiOutlineBars, AiOutlineHome, AiOutlineArrowUp } from "react-icons/ai";
import "./Header.css";
import { GiTireIronCross } from "react-icons/gi";
import { FaFacebook, FaHandHoldingUsd, FaInstagram } from "react-icons/fa";
import { BsCardList, } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useHistory } from "react-router-dom";



const Header = () => {
  const [nav, setNav] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  // signup modal start
  const [showSignUp, setShowSignUp] = useState(false);
  const handleSignUpClose = () => setShowSignUp(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const history = useHistory();

  const handleSignUpShow = () => {
    setShowSignUp(true)
    handleClose()
  };
  // signup modal end




  const handleShow = () => {
    setShow(true)
    handleSignUpClose()
  };
  const toggleNav = () => {
    setNav(!nav);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setStickyNav(true);

    }
    else {
      setStickyNav(false);
    }
  });

  const scrollTop = () => {
    window.scrollTo(
      {
        top: 0,
        behavior: "smooth"
      }
    );
  }
  return (
    <div className={`headerSection ${stickyNav ? "sticky" : ""}`}>
      {
        stickyNav && <button onClick={scrollTop} className="scrollTop"><AiOutlineArrowUp /></button>
      }

      {/* signIn modal start */}
      <Modal show={show} className="signInModal" onHide={handleClose}>
        <div className="LogInHead position-relative text-center">
          <h1 className="mt-4 signInHead">Sign in</h1>
          <span onClick={handleClose} className="position-absolute  closeBtn">x</span>
          <p>New To i-recharge? <Link onClick={handleSignUpShow} className="signUp">Please Sign Up</Link></p>
        </div>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-2 w-75 mx-auto " controlId="exampleForm.ControlInput1">
              <Form.Label className="signInLabel">Email address</Form.Label>
              <input
                className="w-100 SignInInput"
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-2 w-75 mx-auto inputShadow" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <input
                className="w-100 SignInInput"
                type="password"
                placeholder="Inter Your Password"
                autoFocus
              />
            </Form.Group>
            <div className="w-50 mx-auto">
              <button className="SubmitButton w-100 mx-auto mt-3" type="submit">Sign in</button>
            </div>
            <div className="text-center mt-4">
              <FcGoogle className="me-2  socialIcon" />
              <FaInstagram className="me-2 socialIcon instraColor"></FaInstagram>
              <FaFacebook className="me-2 text-primary socialIcon"></FaFacebook>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      {/* signIn modal end */}

      {/* signUp modal start */}

      <Modal show={showSignUp} onHide={handleSignUpClose}>
        <div className="LogInHead position-relative text-center">
          <h1 className="mt-4 signInHead">Sign up</h1>
          <span onClick={handleSignUpClose} className="position-absolute  SignUPCloseBtn">x</span>
          <p>Already have an account? <Link onClick={handleShow} className="signUp">Please Sign Up</Link></p>
        </div>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-2 w-75 mx-auto " controlId="exampleForm.ControlInput1">
              <Form.Label className="signInLabel">User Name</Form.Label>
              <input
                className="w-100 SignInInput"
                type="text"
                placeholder="Marzuk"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-2 w-75 mx-auto inputShadow" controlId="exampleForm.ControlInput1">
              <Form.Label>E-mail</Form.Label>
              <input
                className="w-100 SignInInput"
                type="email"
                placeholder="example@gmail.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-2 w-75 mx-auto inputShadow" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <input
                className="w-100 SignInInput"
                type="number"
                placeholder="017********"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-2 w-75 mx-auto inputShadow" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <input
                className="w-100 SignInInput"
                type="password"
                placeholder="******"
                autoFocus
              />
            </Form.Group>
            <div className="w-50 mx-auto">
              <button className="SubmitButton w-100 mx-auto mt-3" type="submit">Sign up</button>
            </div>
            <div className="text-center mt-4">
              <FcGoogle className="me-2  socialIcon" />
              <FaInstagram className="me-2 socialIcon instraColor"></FaInstagram>
              <FaFacebook className="me-2 text-primary socialIcon"></FaFacebook>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* signUp modal end */}

      <Container>
        <div className="headerContainer">
          <div className="logoContainer">
            <div onClick={() => history.push("/home")} className="logo">
              <img className="w-100 h-100" src={logo2} alt="" />
            </div>
          </div>
          <div className={`navContainer ${nav && "left0"}`}>
            <div className="linksContainer">
              <ul>
                <li>
                  <Link to="/home" className="d-flex align-items-center">
                    <AiOutlineHome className="me-2" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/recharge" className="d-flex align-items-center">
                    <FaHandHoldingUsd className="me-2" />
                    Recharge & pay Bill
                  </Link>
                </li>
                <li>
                  <Link to="/feature" className="d-flex align-items-center">
                    <BsCardList className="me-2" />
                    Feature
                  </Link>
                </li>
                <li>
                  <button onClick={handleShow} className="lginAndSign">

                    Login / Sign Up
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="closeBtnContainer">
            <div className="closeBtn">
              <button className="border-0 bg-transparent" onClick={toggleNav}>
                {!nav ? (
                  <AiOutlineBars className="fs-2 toggleBar" />
                ) : (
                  <GiTireIronCross className="fs-5 toggleCrossBar" />
                )}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
