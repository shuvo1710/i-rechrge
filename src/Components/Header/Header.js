import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../utilities/logo2.PNG"
import { AiOutlineBars } from "react-icons/ai";
import "./Header.css";
const Header = () => {
  const [nav,setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="py-3">
      <Container>
      <div className="headerContainer">
        <div className="logoContainer">
          <div className="logo">
            <img className="w-100 h-100" src={logo} alt="" />
          </div>
        </div>
        <div className={`navContainer ${nav && 'left0'}`}>
          <div className="linksContainer">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/home">Recharge & pay Bill</Link>
              </li>
              <li>
                <Link to="/home">Booking</Link>
              </li>
              <li>
                <Link to="/home">Feature</Link>
              </li>
              <li>
                <Link to="/home">Blog</Link>
              </li>
              <li>
                <Link to="/home">Pages</Link>
              </li>
            </ul>
          </div>
          <div className="profileContainer">
            <div className="profileImage">
              <img src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?t=st=1650951677~exp=1650952277~hmac=35f29986d1bafd0127d17fad98f3219b6b445572e678f668ec193bcb02f2a114&w=900" alt="" className="w-100 h-100" />
            </div>
          </div>
        </div>
        <div className="closeBtnContainer">
          <div className="closeBtn">
            <button className="border-0 bg-transparent" onClick={toggleNav}>
              <AiOutlineBars className="fs-2"/>
            </button>
          </div>
        </div>
      </div>
    </Container>
    </div>
  );
};

export default Header;
