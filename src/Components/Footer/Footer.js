import React, { useState } from "react";
import { Container, Form, Modal } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../utilities/logoImages/logo1.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // 
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

const handleReview = event =>{
  event.preventDefault()
  const from = event.target;
  const start  = rating;
  const reviewText = from.reviewText.value;
  console.log(start, reviewText)
}


  return (

    <div className="footer">
      <Modal centered show={show} className="signInModal" onHide={handleClose}>
        <div className="LogInHead  text-center">
          <h1 className="mt-4 signInHead">Add Review</h1>
          <div className="position-relative">
            <span onClick={handleClose} className="position-absolute d-flex justify-content-center align-items-center  reviewCloseBtn"><AiOutlineClose /></span>
          </div>
        </div>
        <Modal.Body>
          <form onSubmit={handleReview}>
            <div className="star-rating center mb-4 fs-2">
              {[...Array(5)].map((star, index) => {
                
                index += 1;
                return (
                  <button
                    
                    key={index}
                    className={index <= (hover || rating) ? "on" : "off"}
                    name="index"
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <span className="star">&#9733;</span>
                  </button>
                );
              })}
            </div>
            <div className="center w-75 mx-auto">
              <textarea className="w-100 SignInInput" placeholder="write here your valuable review" name="reviewText" id="" cols="30" rows="3"></textarea>
            </div>
            <div className="w-50 mx-auto">
              <button className="SubmitButton w-100 mx-auto mt-3" type="submit">Submit</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <Container className="px-0">
        <div className="row">
          <div className="col-6 col-md-6 col-lg-3">
            <ul>
              <li>
                <h2 className="FooterHead">About Us</h2>
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
            <div className="subsField ">
              <span className="">
                <HiOutlineMail className="border-0 subsIcon" />
              </span>
              <input type="email" className="border-0" placeholder="example@gmail.com" />

            </div>
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
