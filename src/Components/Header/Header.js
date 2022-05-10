import React, { useState } from "react";
import { Container, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../utilities/textLogo-removebg-preview.png";
import { AiOutlineBars, AiOutlineHome,AiOutlineLogin } from "react-icons/ai";
import "./Header.css";
import { GiTireIronCross } from "react-icons/gi";
import { FaHandHoldingUsd, FaEnvelope, FaAngleRight } from "react-icons/fa";
import {
  BsCardList,
  // BsPen,
  BsFillTelephoneFill,
  BsFillCalendarDateFill,
  BsFillPeopleFill,
} from "react-icons/bs";
// import { HiOutlineClipboardList } from "react-icons/hi";
// import { RiPagesLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import modalImage from "../../utilities/modalProfile.PNG";
import { GoLocation } from "react-icons/go";
// import { Switch } from "react-router-dom";
// import { Route } from "react-router-dom";
// import ProfileTab from "./ProfileTab/ProfileTab";
// import { useRouteMatch } from "react-router-dom";
// import OfferTab from "./OfferTab/OfferTab";
import useAuth from "../../Hooks/useAuth";
const Header = () => {
  // let { path, url } = useRouteMatch();
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  const history = useHistory();
  const [show, setShow] = useState(false);
  const {user,setUser} = useAuth()
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
  return (
    <div className={`headerSection ${stickyNav ? "sticky" : ""}`}>
      <Modal centered show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          <button onClick={()=>{setUser('');handleClose()}} className="bg-transparent border-1 rounded border-info text-info">Logout</button>
          </div>
          

          <div className="profileModalContainer">
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
                        <h3 className="fs-4">Kelvien Clain </h3>
                        <div>
                          <span className="fs-3 fw-bold">$</span>
                          <span>1500</span>
                        </div>
                      </div>
                      <span className="text-secondary">
                        <GoLocation className="me-2" /> Bangladesh
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
          {/* <div className="profileNav mt-3 border-bottom border-secondary pb-2">
            <button className="border-0 bg-transparent me-3"><Link className="text-decoration-none" to={`${url}/profile`}>Profile</Link></button>
            <button className="border-0 bg-transparent ms-3"><Link className="text-decoration-none" to={`${url}/offers`}>Offers</Link></button>
          </div>
          <div className="profileNavContainer mt-2">
            <Switch>
              <Route exact path={`${path}/profile`}>
                <ProfileTab/>
              </Route>
              <Route exact path={`${path}/offers`}>
                <OfferTab/>
              </Route>
            </Switch>
          </div> */}
        </Modal.Body>
      </Modal>

      <Container>
        <div className="headerContainer">
          <div className="logoContainer">
            <div onClick={() => history.push("/home")} className="logo">
              <img className="w-100 h-100" src={logo} alt="" />
            </div>
          </div>
          <div className={`navContainer ${nav && "left0"}`}>
            {/* <div className="profileContainer onlySmallScreen">
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
            </div> */}

            <div className="linksContainer">
              <ul>
                <li>
                  <Link to="/home" className="d-flex align-items-center">
                    <AiOutlineHome className="me-2" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/recharge"
                    className="d-flex align-items-center"
                  >
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
                  <AiOutlineLogin className="onlySmallScreen me-2"/>
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
