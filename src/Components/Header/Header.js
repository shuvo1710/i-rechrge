import React, { useState } from "react";
import { Container, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo2 from "../../utilities/33893_705521_37309_image-removebg-preview.png";
import { AiOutlineBars, AiOutlineHome, AiOutlineLogin,AiOutlineArrowUp } from "react-icons/ai";
import "./Header.css";
import { GiTireIronCross } from "react-icons/gi";
import { FaHandHoldingUsd, FaEnvelope, FaAngleRight } from "react-icons/fa";
import {
  BsCardList,
  BsFillTelephoneFill,
  BsFillCalendarDateFill,
  BsFillPeopleFill,
} from "react-icons/bs";
import { useHistory } from "react-router-dom";
import modalImage from "../../utilities/modalProfile.PNG";
import { GoLocation } from "react-icons/go";
import useAuth from "../../Hooks/useAuth";
const Header = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  const history = useHistory();
  const [show, setShow] = useState(false);
  const { user, setUser } = useAuth();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        stickyNav && <button onClick={scrollTop} className="scrollTop"><AiOutlineArrowUp/></button>
      }
      
      <Modal centered show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="profileModalContainer">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <ul className="d-flex align-items-center text-secondary mb-2">
              <li>
                <Link className="text-secondary" to="/">
                  Home
                </Link>
              </li>
              <li>
                <FaAngleRight />
              </li>
              <li>
                <Link className="text-secondary" to="/home">
                  Profile
                </Link>
              </li>
            </ul>
            <button
              onClick={() => {
                setUser("");
                handleClose();
              }}
              className="bg-transparent border-1 border-dark rounded text-orange"
            >
              Logout
            </button>
          </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-3 col-xl-3 p-1">
                <div className="modalProfileImage">
                  <img src={modalImage} alt="" className="w-100 h-100" />
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-9 col-xl-9 p-1">
                <div className="profileDetails">
                  <div className="row p-2">
                    <div className="col-12 col-md-12 col-lg-5 col-xl-5  responsivePadding">
                      <div className="d-flex align-items-center justify-content-between">
                        <h3 className="fs-4">Mark Otto </h3>
                        <div>
                          <span className="fs-5 fw-bold">$</span>
                          <span>1500</span>
                        </div>
                      </div>
                      <span className="text-secondary">
                        <GoLocation className="me-2" />from Bangladesh
                      </span>
                      <div className="profileButtons mt-3">
                        <button>Recharge</button>
                        <button>Gift</button>
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-7 col-xl-7  responsiveBorderPadding">
                      <div>
                        <Table>
                          <tbody>
                            <tr>
                              <th>
                                <BsFillTelephoneFill className="me-3" />
                                <span className="onlyBigScreen">
                                  Mobile Number
                                </span>
                              </th>
                              <td>017XXXXXXXX</td>
                            </tr>
                            <tr>
                              <th>
                                <FaEnvelope className="me-3" />
                                <span className="onlyBigScreen">Email</span>
                              </th>
                              <td>example@gmail.com</td>
                            </tr>
                            <tr>
                              <th>
                                <BsFillCalendarDateFill className="me-3" />
                                <span className="onlyBigScreen">Date</span>
                              </th>
                              <td>16 October 2025</td>
                            </tr>
                            <tr>
                              <th>
                                <BsFillPeopleFill className="me-3" />
                                <span className="onlyBigScreen">Gender</span>
                              </th>
                              <td>Male</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              </ul>
            </div>
            <div className="responsiveWidth">
              <div className="p-5 border-bottom onlySmallScreen">
                <div onClick={() => history.push("/home")} className="logo">
                  <img className="w-100 h-100" src={logo2} alt="" />
                </div>
              </div>
              {user?.email ? (
                <div className="profileContainer">
                  <div className="d-flex align-items-center rowReverse">
                    <div className="responsMargin">
                      <h6 className="m-0">Mark Otto</h6>
                      <span>$ 126.00</span>
                    </div>
                    <div onClick={handleShow} className="profileImage">
                      <img src={modalImage} alt="" className="w-100 h-100" />
                    </div>
                  </div>
                </div>
              ) : (
                <Link to="/login" className="lginAndSign">
                  <AiOutlineLogin className="onlySmallScreen me-2" />
                  Login / Sign Up
                </Link>
              )}
            </div>
          </div>
          <div className="closeBtnContainer">
            <div className="closeBtn">
              <button className="border-0 bg-transparent" onClick={toggleNav}>
                {!nav ? (
                  <AiOutlineBars className="fs-2" />
                ) : (
                  <GiTireIronCross className="fs-5" />
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
