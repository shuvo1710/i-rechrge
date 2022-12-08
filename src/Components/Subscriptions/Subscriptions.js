import React from "react";
import { Container } from "react-bootstrap";
import "./Subscriptions.css";
import image from "../../utilities/subscription/Download-app-image.png";
import Google from "../../utilities/googleIcon/AppleIcon.png"
import Apple from "../../utilities/googleIcon/GoogleIcon.png"
const Subscriptions = () => {
  return (
    <div>
      <Container>
        <div className="subsContainer">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-6 col-xl-5">
              <div className="subscriptionText">
                <h2 className="subscription-head">Download Our App</h2>
                <span>(Mobile Recharge Web Applications )</span>
                <br />
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora beatae nesciunt vitae laboriosam porro error
                  voluptates, optio animi libero saepe.
                </p>
                <button>Recharge Now</button>
                
              </div>
              <div className="d-flex gap-3 mt-3">
                  <div className="iconHight">
                  <img src={Google} className="h-100" alt="" srcSet="" />
                  </div>

                  <div className="iconHight">
                  <img src={Apple} className="h-100" alt="" srcSet="" />
                  </div>
                  
                </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6 col-xl-7">
              <div className="subscriptionImage">
                <img className="w-100 h-100" src={image} alt="" />
                
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Subscriptions;
