import React from "react";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../utilities/logoImages/logo1.png";
import { BsFillTelephoneFill} from "react-icons/bs";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";

import { FaEnvelope } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="row">
          <div className="col-6 col-md-6 col-lg-3">
            <ul>
              <li>
                <h2 className=" FooterHead">About Us</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit.ernatur eum.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-6 col-lg-3">
            <h4 className=" FooterHead">Information</h4>
            <ul>
              <li>
                <Link  to="/home">About Us</Link>
              </li>
              <li>
                <Link to="/home">More Search</Link>
              </li>
              <li>
                <Link to="/home">Blogs</Link>
              </li>
              <li>
                <Link to="/home">Offers and discount</Link>
              </li>
              <li>
                <Link to="/home">Testimonial</Link>
              </li>
              <li>
                <Link to="/home">Events</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-6 col-lg-3">
            <h4 className=" FooterHead">Helpfull links</h4>
            <ul>
              <li>
                <Link to="/home">Services</Link>
              </li>
              <li>
                <Link to="/home">Supports</Link>
              </li>
              <li>
                <Link to="/home">Terms and conditions</Link>
              </li>
              <li>
                <Link to="/home">Offers and discount</Link>
              </li>
              <li>
                <Link to="/home">Testimonial</Link>
              </li>
              <li>
                <Link to="/home">Privacy and policy</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-6 col-lg-3">
            <h4 className=" FooterHead">Subscribe for more..</h4>
            <Link to="/home">
              <div className="logo">
                <img className="w-100 h-100" src={logo} alt="" />
              </div>
            </Link>
            <InputGroup className="mt-3">
              <InputGroup.Text id="basic-addon1 pointer">
                <FaEnvelope className="pointer" />
              </InputGroup.Text>
              <FormControl
                className="bg-transparent text-light"
                placeholder="Enter your email"
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <div className="mt-4">
              <ul>
                <li>
              <Link to="/home">
                  <BsFillTelephoneFill className="me-2" />
                  +9856-83245
                </Link>
              </li>
              <li>
                <Link to="/home">
                  <FaEnvelope className="me-2" />
                  example@gmail.com
                </Link>
                </li>
              </ul>
            </div>
            <div className="mt-4 d-flex align-items-center footerIcon">
              <Link to="#">
                <FaFacebookSquare className="fs-4" />
              </Link>
              <Link to="#">
                <FiInstagram className="fs-4" />
              </Link>
              <Link to="#">
                <FaTwitterSquare className="fs-4" />
              </Link>
              <Link to="#">
                <FaLinkedin className="fs-4" />
              </Link>
              <Link to="#">
                <FaYoutubeSquare className="fs-4" />
              </Link>
            
            </div>
          </div>
        </div>
       
      </Container>
    </div>
  );
};

export default Footer;
