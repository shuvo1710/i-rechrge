import React from "react";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";
import footerLogo2 from "../../utilities/33893_705521_37309_image-removebg-preview.png";
import { BsFillTelephoneFill, BsSkype, BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="row">
          <div className="col-6 col-md-6 col-lg-3">
            <ul>
              <li>
                <h4>About Us</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit.ernatur eum.
                </p>
              </li>
              <li>
                <h6>Contact Us</h6>
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
          <div className="col-6 col-md-6 col-lg-3">
            <h4>Information</h4>
            <ul>
              <li>
                <Link to="/home">About Us</Link>
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
            <h4>Helpfull links</h4>
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
            <h4>Subscribe for more..</h4>
            <Link to="/home">
              <div className="logo">
                <img className="w-100 h-100" src={footerLogo2} alt="" />
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
            <div className="mt-4 d-flex align-items-center justify-content-between">
              <Link to="#">
                <FaFacebookSquare className="fs-3" />
              </Link>
              <Link to="#">
                <AiFillInstagram className="fs-2" />
              </Link>
              <Link to="#">
                <AiFillTwitterSquare className="fs-2" />
              </Link>
              <Link to="#">
                <BsSkype className="fs-3" />
              </Link>
              <Link to="#">
                <BsLinkedin className="fs-3" />
              </Link>
              <Link to="#">
                <AiFillYoutube className="fs-1" />
              </Link>
            </div>
          </div>
        </div>
        <div className="subFooter">
          <p className="text-secondary text-center p-0 m-0">
            &copy; Allrights reserved by i-Recharge
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
