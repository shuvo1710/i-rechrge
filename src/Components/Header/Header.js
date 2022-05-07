import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../utilities/textLogo-removebg-preview.png";
import { AiOutlineBars,AiOutlineHome } from "react-icons/ai";
import "./Header.css";
import { GiTireIronCross } from "react-icons/gi";
import { FaHandHoldingUsd,FaEnvelope } from "react-icons/fa";
import { BsCardList,BsPen,BsFillTelephoneFill,BsFillCalendarDateFill,BsFillPeopleFill } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import { RiPagesLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import modalImage from '../../utilities/modalProfile.PNG'

const Header = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  const history = useHistory()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="py-3">
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4 col-xl-4 p-1">
              <div className="modalProfileImage">
                <img src={modalImage} alt="" className="w-100 h-100" />
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-8 col-xl-8 p-1">
              <div className="profileDetails">
                <div><span className="fs-4">Kelvien Clain </span><span></span></div>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4 col-xl-4 p-1">
                    <div className="profileItems">
                      <span>Available Balance</span><br />
                      <span>1500 ৳</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-4 p-1">
                    <div className="profileItems">
                      <span>Available Points</span><br />
                      <span>172</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-4 p-1">
                    <div className="profileItems">
                      <span>Available Minutes</span><br />
                      <span>00</span>
                    </div>
                  </div>
                </div>
                <span><BsFillTelephoneFill className="me-3"/>017XXXXXXXX</span><br />
                <span><FaEnvelope className="me-3"/> example@gmail.com</span><br />
                <span><BsFillCalendarDateFill className="me-3"/>16 October 2025</span><br />
                <span><BsFillPeopleFill className="me-3"/>Male</span><br />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>



      <Container>
        <div className="headerContainer">
          <div className="logoContainer">
            <div onClick={()=>history.push('/home')} className="logo">
              <img className="w-100 h-100" src={logo} alt="" />
            </div>
          </div>
          <div className={`navContainer ${nav && "left0"}`}>
            <div className="profileContainer onlySmallScreen">
              <div className="d-flex align-items-center border-bottom pb-4">
                <div onClick={handleShow} className="profileImage">
                  <img
                    src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?t=st=1650951677~exp=1650952277~hmac=35f29986d1bafd0127d17fad98f3219b6b445572e678f668ec193bcb02f2a114&w=900"
                    alt=""
                    className="w-100 h-100"
                  />
                </div>
                <div className="ms-3">
                  <h5 className="m-0">Mark Otto</h5>
                  <span>$ 126.00</span>
                </div>
              </div>
            </div>

            <div className="linksContainer">
              <ul>
                <li>
                  <Link to="/home" className="d-flex align-items-center"><AiOutlineHome className="me-2"/>Home</Link>
                </li>
                <li>
                  <Link to="/home" className="d-flex align-items-center"><FaHandHoldingUsd className="me-2"/>Recharge & pay Bill</Link>
                </li>
                <li>
                  <Link to="/home" className="d-flex align-items-center"><HiOutlineClipboardList className="me-2"/>Booking</Link>
                </li>
                <li>
                  <Link to="/home" className="d-flex align-items-center"><BsCardList className="me-2"/>Feature</Link>
                </li>
                <li>
                  <Link to="/home" className="d-flex align-items-center"><BsPen className="me-2"/>Blog</Link>
                </li>
                <li>
                  <Link to="/home" className="d-flex align-items-center"><RiPagesLine className="me-2"/>Pages</Link>
                </li>
              </ul>
            </div>
            <div className="profileContainer onlyBigScreen">
              <div onClick={handleShow} className="profileImage">
                <img
                  src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?t=st=1650951677~exp=1650952277~hmac=35f29986d1bafd0127d17fad98f3219b6b445572e678f668ec193bcb02f2a114&w=900"
                  alt=""
                  className="w-100 h-100"
                />
              </div>
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
