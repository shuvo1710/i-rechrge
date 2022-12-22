import React, { useState } from "react";
import { Container, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo2 from "../../utilities/logoImages/logo1.png";
import { AiOutlineBars, AiOutlineArrowUp, AiOutlineClose } from "react-icons/ai";
import "./Header.css";
import { GiTireIronCross } from "react-icons/gi";
import { FaFacebook, FaInstagram, FaUserAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";



const Header = () => {
  const [nav, setNav] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  // signup modal start
  const [showSignUp, setShowSignUp] = useState(false);
  const handleSignUpClose = () => setShowSignUp(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // toggle user
  const [showUser, setShowUser] = useState(false)

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
  // sign in user
  const handleLogIn = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { email, password }
    console.log(userInfo)

    fetch('http://192.168.68.116/paycharge/api/v1/login', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.data.access_token) {
          localStorage.setItem("token", data.data.access_token)
          toast.success(data.message)
          console.log(data.data.access_token)
        }
        else{
          toast.error(data.message)
          console.log("error sign in")
        }
      })
  }


  //  sign up user
  const handleSignUpUser = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.userName.value;
    const email = form.email.value;
    const number = form.number.value;
    const password = form.password.value;
    const password_confirmation = form.confirmPass.value;
    const signUpUser = { name, email, number, password, password_confirmation }

    console.log(signUpUser)
    fetch('http://192.168.68.116/paycharge/api/v1/register', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(signUpUser)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
          // localStorage.setItem("token", data.data.access_token) 
          toast.success(data.message)
        }
        // console.log(localStorage.getItem("token"))
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error(error.message)
      });
  }

  // const token = localStorage.getItem("token") ? localStorage.getItem("token") : false
  
  // const handleLogOut = event => {
  //   fetch('http://192.168.68.116/paycharge/api/v1/logout', {
  //     method: "POST",
  //     mode: 'cors',
  //     headers: {

  //     },
  //   }
  //   )
  //     .then((data) => {
  //      if(data.data.message){
  //       localStorage.clear("token")
  //      }
  //       console.log(data)
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // }

  return (
    <div className={`headerSection ${stickyNav ? "sticky" : ""}`}>
      {
        stickyNav && <button onClick={scrollTop} className="scrollTop"><AiOutlineArrowUp /></button>
      }

      {/* signIn modal start */}
      <Modal centered show={show} className="signInModal" onHide={handleClose}>
        <div className="LogInHead  text-center">
          <h1 className="mt-4 signInHead">Sign in</h1>
          <div className="position-relative">
            <span onClick={handleClose} className="position-absolute d-flex justify-content-center align-items 
             center  closeBtn"><AiOutlineClose /></span>
          </div>
          <p>New To i-recharge? <Link to="" onClick={handleSignUpShow} className="signUp">Please Sign Up</Link></p>
        </div>
        <Modal.Body>
          <form onSubmit={handleLogIn}>
            <Form.Group className="mb-2 w-75 mx-auto " controlId="exampleForm.ControlInput1">
              <Form.Label className="signInLabel">Email address</Form.Label>
              <input
                className="w-100 SignInInput"
                type="email"
                name="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-2 w-75 mx-auto inputShadow" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <input
                className="w-100 SignInInput"
                type="password"
                name="password"
                placeholder="******"
                autoFocus
              />
            </Form.Group>
            <div className="w-50 mx-auto">
              <button className="SubmitButton w-100 mx-auto mt-3" type="submit">Sign in</button>
            </div>
            <div className="text-center mt-4">
              <FcGoogle className="me-2  socialIcon" />
              <FaInstagram className="me-2 socialIcon instagramColor"></FaInstagram>
              <FaFacebook className="me-2 text-primary socialIcon"></FaFacebook>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      {/* signIn modal end */}

      {/* signUp modal start */}

      <Modal centered show={showSignUp} onHide={handleSignUpClose}>
        <div className="LogInHead  text-center">
          <h1 className="mt-4 signInHead">Sign up</h1>
          <div className="position-relative ">
            <span onClick={handleSignUpClose} className="position-absolute  d-flex justify-content-center 
            align-items-center SignUPCloseBtn"><AiOutlineClose /></span>
          </div>
          <p>Already have an account? <Link to="" onClick={handleShow} className="signUp">Please Sign in</Link></p>
        </div>
        <Modal.Body>
          <form onSubmit={handleSignUpUser}>
            <Form.Group className="mb-2 w-75 mx-auto " controlId="exampleForm.ControlInput1">
              <Form.Label className="signInLabel">User Name</Form.Label>
              <input
                className="w-100 SignInInput"
                type="text"
                name="userName"
                placeholder="Marzuk"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-2 w-75 mx-auto inputShadow" controlId="exampleForm.ControlInput1">
              <Form.Label>E-mail</Form.Label>
              <input
                className="w-100 SignInInput"
                type="email"
                name="email"
                placeholder="example@gmail.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-2 w-75 mx-auto inputShadow" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <input
                className="w-100 SignInInput"
                type="number"
                name="number"
                placeholder="017********"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-2 w-75 mx-auto inputShadow" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <input
                className="w-100 SignInInput"
                type="password"
                name="password"
                placeholder="******"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-2 w-75 mx-auto inputShadow" controlId="exampleForm.ControlInput1">
              <Form.Label>Confirm Password</Form.Label>
              <input
                className="w-100 SignInInput"
                type="password"
                name="confirmPass"
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
          </form>
        </Modal.Body>
      </Modal>

      {/* signUp modal end */}

      <Container className="px-0">
        <div className="headerContainer">
          <div className="logoContainer">
            <div className="logo">
              <Link to="/"><img className="w-100 h-100" src={logo2} alt="" /></Link>
            </div>
          </div>
          <div className={`navContainer ${nav && "left0"}`}>
            <div className="linksContainer">
              <ul>
                <li>
                  <Link to="/home" className="d-flex align-items-center">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/recharge" className="d-flex align-items-center">
                    Recharge & pay Bill
                  </Link>
                </li>
                <li>
                  <Link to="/feature" className="d-flex align-items-center">
                    Feature
                  </Link>
                </li>
                {
                  localStorage.getItem("token") ? ""
                    :
                    <li>
                      <button onClick={handleShow} className="lginAndSign">
                        Login
                      </button>
                    </li>
                }
                <li className="text-black">
                  <div onClick={() => setShowUser(!showUser)} className="position-relative d-flex justify-content-center align-items-center">
                    <span className="userLogo"><FaUserAlt  /></span>
                    <div className={`User ${showUser ? "d-block" : ""}`}>
                      <div onClick={() => setShowUser(!showUser)} className="userItem">
                        <span className="userUpdate">
                          <Link to="/transaction" >Latest Transaction</Link>
                        </span>
                        <span className="userUpdate">
                          <Link to="/updateProfile">Update Profile</Link>
                        </span>
                        <span className="userUpdate">
                          <Link >log Out</Link>
                        </span>
                      </div>
                    </div>
                  </div>
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
