import React, { useState } from "react";
import { Button, Container, Form, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo2 from "../../utilities/logoImages/logo1.png";
import { AiOutlineBars, AiOutlineHome, AiOutlineLogin, AiOutlineArrowUp } from "react-icons/ai";
import "./Header.css";
import { GiTireIronCross } from "react-icons/gi";
import { FaGoogle, FaHandHoldingUsd, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsCardList, } from "react-icons/bs";
import { useHistory } from "react-router-dom";



const Header = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  const history = useHistory();
  const [stickyNav, setStickyNav] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  });
  const scrollTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <div className={`headerSection ${stickyNav ? "sticky" : ""}`}>
      {
        stickyNav && <button onClick={scrollTop} className="scrollTop"><AiOutlineArrowUp /></button>
      }

      <Modal show={show} onHide={handleClose}>
    
          <div className="LogInHead">Log in</div>
    

        
                 
        <p>New To i-recharge? <button className="signUpButton">Please Sign Up</button></p>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="******"
                autoFocus
              />
            </Form.Group>

            <button className="SubmitButton" type="submit">Log in</button>

            <div className="text-center mt-4">
              <FaGoogle className="mx-2 fs-3 socialIcon"></FaGoogle>
              <FaInstagram className="mx-2 fs-3 socialIcon"></FaInstagram>
              <FaLinkedin className="mx-2 fs-3 socialIcon"></FaLinkedin>
          
            </div>

          </Form>
        </Modal.Body>
        
      </Modal>

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
